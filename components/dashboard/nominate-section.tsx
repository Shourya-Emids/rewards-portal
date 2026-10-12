'use client'

import { useState } from 'react'

import { TEAM_LEADERBOARD } from '@/lib/dashboard-data'
import { useSession } from '@/components/session/session-provider'

import classes from './nominate-section.module.css'

const NOMINATION_POINTS = [10, 25, 50, 100]

export function NominateSection() {
  const { persona } = useSession()
  const isManager = persona !== 'employee'
  const nominees = TEAM_LEADERBOARD.filter((entry) => !entry.isCurrentUser)

  const [nominee, setNominee] = useState<string | null>(null)
  const [points, setPoints] = useState<number | null>(null)
  const [note, setNote] = useState('')
  const [sent, setSent] = useState(false)

  /* Employees nominate peers; only managers attach reward points. */
  const canSend = nominee !== null && (points !== null || isManager) && (isManager || note.trim() !== '')
  const sentText = isManager
    ? 'Nomination sent for recognition!'
    : 'Nomination sent! Your manager will review it and assign the points.'

  function send(event: React.FormEvent) {
    event.preventDefault()
    if (nominee === null) return
    setNominee(null)
    setPoints(null)
    setNote('')
    setSent(true)
  }

  return (
    <section id="nominate" className={`${classes.section} fade-up`}>
      <div className={classes.headCopy}>
        <h2>Nominate someone</h2>
        <p>
          {isManager
            ? 'Spot a teammate going the extra mile and award them points.'
            : 'Nominate a teammate who deserves a shout-out — your manager awards the points.'}
        </p>
      </div>

      <form className={classes.panel} onSubmit={send}>
        <p className={classes.fieldLabel}>Who deserves it?</p>
        <div className={classes.chipRow}>
          {nominees.map((entry) => (
            <button
              key={entry.rank}
              type="button"
              className={`${classes.personChip} ${nominee === entry.name ? classes.chipSelected : ''}`}
              onClick={() => {
                setNominee(entry.name)
                setSent(false)
              }}
              aria-pressed={nominee === entry.name}
            >
              <img src={entry.avatar} alt="" />
              <span>{entry.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {isManager && (
          <>
            <p className={classes.fieldLabel}>Points</p>
            <div className={classes.pointRow}>
              {NOMINATION_POINTS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${classes.pointChip} ${points === option ? classes.chipSelected : ''}`}
                  onClick={() => {
                    setPoints(option)
                    setSent(false)
                  }}
                  aria-pressed={points === option}
                >
                  +{option}
                </button>
              ))}
            </div>
          </>
        )}

        <p className={classes.fieldLabel}>
          Why do they deserve it? <span className={classes.labelHint}>{isManager ? '(optional)' : '(required)'}</span>
        </p>
        <textarea
          className={classes.note}
          rows={3}
          maxLength={300}
          placeholder="Describe the moment and the impact it had…"
          value={note}
          onChange={(event) => {
            setNote(event.target.value)
            setSent(false)
          }}
        />

        <div className={classes.actionsRow}>
          <button type="submit" className={classes.submit} disabled={!canSend}>
            Send nomination
          </button>
          {sent && <span className={classes.sentNote}>{sentText}</span>}
          <p className={classes.footNote}>
            {isManager
              ? 'As a manager, nominations you send with points are approved instantly.'
              : 'Your manager reviews the nomination and decides the reward points.'}
          </p>
        </div>
      </form>
    </section>
  )
}
