import { AlarmClock, ChevronRight } from 'lucide-react'

import { QUARTER_REMINDER } from '@/lib/dashboard-data'

import classes from './reminder-tile.module.css'

export function ReminderTile() {
  return (
    <aside className={`${classes.reminderTile} fade-up d1`} aria-label="Quarter closing reminder">
      <span className={classes.reminderIcon} aria-hidden="true">
        <AlarmClock size={18} />
      </span>
      <div className={classes.reminderCopy}>
        <p className={classes.reminderTitle}>
          {QUARTER_REMINDER.quarter} closes in {QUARTER_REMINDER.daysLeft} days
        </p>
        <p className={classes.reminderText}>
          Nominate a teammate before {QUARTER_REMINDER.endsOn} — every quarter,
          the recognitions you send count towards team awards.
        </p>
      </div>
      <a href="#nominate" className={classes.reminderCta}>
        Nominate now
        <ChevronRight size={14} />
      </a>
    </aside>
  )
}
