import {
  LEDGER_SEED,
  NEXT_REWARD,
} from '@/lib/rewards-data'

import classes from './rewards.module.css'

export function RewardsView() {
  const earned = LEDGER_SEED.filter((e) => e.kind === 'earned').reduce(
    (total, entry) => total + entry.points,
    0,
  )
  const redeemed = LEDGER_SEED.filter((e) => e.kind === 'redeemed').reduce(
    (total, entry) => total + entry.points,
    0,
  )
  const balance = earned - redeemed
  const progressPercent = Math.min(100, Math.round((balance / NEXT_REWARD.goal) * 100))

  return (
    <div className={classes.page}>
      <header className={`${classes.pageHeader} fade-up`}>
        <h1>My Wallet</h1>
        <p>Your points, earned and spent.</p>
      </header>

      <section className={`${classes.overviewGrid} fade-up d1`} aria-label="Balance overview">
        <article className={classes.balanceCard}>
          <p className={classes.balanceLabel}>Current balance</p>
          <p className={classes.balanceValue}>
            {balance.toLocaleString()} <small>pts</small>
          </p>
          <div className={classes.balanceStats}>
            <span>{earned.toLocaleString()} earned</span>
            <span className={classes.spentStat}>−{redeemed.toLocaleString()} redeemed</span>
          </div>
        </article>
        <article className={classes.progressCard}>
          <p className={classes.progressLabel}>Next reward · {NEXT_REWARD.name}</p>
          <div className={classes.progressTrack}>
            <span style={{ width: `${progressPercent}%` }} />
          </div>
          <p className={classes.progressCaption}>
            {balance.toLocaleString()} of {NEXT_REWARD.goal.toLocaleString()} pts
          </p>
        </article>
      </section>

      <section className={`${classes.bottomGrid} fade-up d2`} aria-label="History">
        <article className={classes.panel}>
          <h2>Points ledger</h2>
          <ul className={classes.ledgerList}>
            {LEDGER_SEED.map((entry) => (
              <li key={entry.id} className={classes.ledgerRow}>
                <span className={`${classes.ledgerPoints} ${entry.kind === 'earned' ? '' : classes.spent}`}>
                  {entry.kind === 'earned' ? '+' : '−'}
                  {entry.points.toLocaleString()}
                </span>
                <div className={classes.ledgerInfo}>
                  <p className={classes.ledgerLabel}>{entry.label}</p>
                  <p className={classes.ledgerMeta}>
                    {entry.source} · {entry.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}
