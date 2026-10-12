import classes from './buddy-card.module.css'

export function BuddyCard() {
  return (
    <article className={classes.buddyCard}>
      <div className={classes.avatar}>
        <img src="/avatar-dashboard.png" alt="Glenda Gutmann" />
      </div>
      <div className={classes.copy}>
        <p>Top buddies</p>
        <h3>Glenda Gutmann</h3>
        <button type="button">View Details</button>
      </div>
    </article>
  )
}
