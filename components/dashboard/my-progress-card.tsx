import { ChevronRight, Info } from 'lucide-react'

import { MY_PROGRESS, TEAM_LEADERBOARD } from '@/lib/dashboard-data'

import classes from './my-progress-card.module.css'

export function MyProgressTile() {
  return (
    <article className={`${classes.tile} fade-up`}>
      <header className={classes.tileHeading}>
        <span>Leaderboard</span>
        <Info size={11} className={classes.headingIcon} aria-hidden="true" />
        <ChevronRight size={14} className={classes.pushRight} aria-hidden="true" />
      </header>

      <ul className={classes.leaderboard}>
        {TEAM_LEADERBOARD.map((entry) => (
          <li
            key={entry.rank}
            className={`${classes.row} ${entry.isCurrentUser ? classes.currentUserRow : ''}`}
          >
            <span className={`${classes.rank} ${entry.rank === 1 ? classes.topRank : ''}`}>
              {entry.rank}
            </span>
            <img className={classes.rowAvatar} src={entry.avatar} alt="" />
            <span className={classes.rowName}>{entry.name}</span>
            {entry.isCurrentUser && <span className={classes.youChip}>you</span>}
            <span className={classes.rowPoints}>
              {entry.points} <small>pts</small>
            </span>
          </li>
        ))}
      </ul>

      <div className={classes.progressPanel}>
        <div className={classes.panelHead}>
          <span className={classes.panelTitle}>My progress</span>
          <span className={classes.panelPoints}>
            {MY_PROGRESS.points.toLocaleString()} <small>pts</small>
          </span>
        </div>
        <div className={classes.track}>
          <span style={{ width: `${MY_PROGRESS.percent}%` }} />
        </div>
      </div>
    </article>
  )
}
