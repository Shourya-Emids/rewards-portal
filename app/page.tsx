import { GreetingSection, StatsSection } from '@/components/dashboard/hero-section'
import { ReminderTile } from '@/components/dashboard/reminder-tile'
import { BalanceCard } from '@/components/dashboard/balance-card'
import { BuddyCard } from '@/components/dashboard/buddy-card'
import { NominateSection } from '@/components/dashboard/nominate-section'

import classes from './page.module.css'

export default function DashboardPage() {
  return (
    <div className={classes.page}>
      <GreetingSection />
      <ReminderTile />
      <StatsSection />
      <section className={classes.summaryGrid} aria-label="Rewards summary">
        <BalanceCard />
        <BuddyCard />
      </section>
      <NominateSection />
    </div>
  )
}
