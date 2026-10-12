import classes from './balance-card.module.css'

export function BalanceCard() {
  return (
    <article className={classes.balanceCard}>
      <div>
        <p>
          Your total reward
          <br />
          points:
        </p>
        <strong>1,250 points</strong>
      </div>
      <button type="button">Redeem Now</button>
    </article>
  )
}
