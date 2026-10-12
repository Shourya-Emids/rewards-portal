import {
  GIVEN_RECOGNITIONS,
  MY_RECOGNITION_STATS,
  RECEIVED_RECOGNITIONS,
} from '@/lib/recognition-data'
import { TEAM_LEADERBOARD } from '@/lib/dashboard-data'

import classes from './recognition.module.css'

function PanelTitle({ title }: { title: string }) {
  return (
    <div className={classes.sectionHead}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <span className={classes.titleBar} aria-hidden="true" />
    </div>
  )
}

export function RecognitionView() {
  const youEntry = TEAM_LEADERBOARD.find((entry) => entry.isCurrentUser)
  const rank = youEntry?.rank ?? Math.max(...TEAM_LEADERBOARD.map((e) => e.rank))
  const receivedCount = RECEIVED_RECOGNITIONS.length
  const givenCount = GIVEN_RECOGNITIONS.length

  const statTiles = [
    { label: 'Received', value: String(receivedCount), note: 'this quarter' },
    { label: 'Given', value: String(givenCount), note: 'this quarter' },
    { label: 'Points earned', value: MY_RECOGNITION_STATS.pointsEarned.toLocaleString(), note: 'via recognition' },
    { label: 'Team rank', value: `#${rank}`, note: 'of the leaderboard' },
  ]

  return (
    <div className={classes.page}>
      <header className={`${classes.pageHeader} fade-up`}>
        <h1>My Recognition</h1>
        <p>Every moment of appreciation, in one place.</p>
      </header>

      <section className={`${classes.statGrid} fade-up d1`} aria-label="Recognition stats">
        {statTiles.map((tile) => (
          <article key={tile.label} className={classes.statTile}>
            <p className={classes.statLabel}>{tile.label}</p>
            <p className={classes.statValue}>{tile.value}</p>
            <p className={classes.statNote}>{tile.note}</p>
          </article>
        ))}
      </section>

      <section className={`${classes.mainGrid} fade-up d2`} aria-label="Recognition history">
        <article className={classes.panel}>
          <PanelTitle title="Recognitions received" />
          <ul className={classes.wallList}>
            {RECEIVED_RECOGNITIONS.map((rec) => (
              <li key={rec.id} className={classes.quoteCard}>
                <div className={classes.quoteHead}>
                  <img className={classes.quoteAvatar} src={rec.fromAvatar} alt="" />
                  <div>
                    <p className={classes.quoteLine}>
                      <strong>{rec.from}</strong> recognized you
                    </p>
                    <span className={classes.quoteMeta}>{rec.date}</span>
                  </div>
                  <span className={classes.quotePoints}>+{rec.points}</span>
                </div>
                <div className={classes.quoteBody}>
                  <span className={classes.recognChip}>{rec.category}</span>
                  <blockquote className={classes.quoteText}>
                    “{rec.points >= 100 ? 'Truly above and beyond.' : 'Thank you for the shout-out.'}”
                  </blockquote>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className={classes.panel}>
          <PanelTitle title="Recognized by me" />
          <ul className={classes.givenList}>
            {GIVEN_RECOGNITIONS.map((rec) => (
              <li key={rec.id} className={classes.givenRow}>
                <img className={classes.givenAvatar} src={rec.toAvatar} alt="" />
                <div className={classes.givenInfo}>
                  <p className={classes.givenName}>{rec.to}</p>
                  <span className={classes.recognChip}>{rec.category}</span>
                </div>
                <span className={classes.givenPoints}>
                  +{rec.points}
                  <small>{rec.date}</small>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}
