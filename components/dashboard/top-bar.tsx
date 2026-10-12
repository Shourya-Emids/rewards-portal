'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Bell, LogOut, Search } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/dashboard-data'
import { useSession } from '@/components/session/session-provider'

import classes from './top-bar.module.css'

function isActive(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function TopBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { persona, logout } = useSession()

  /* Manager-only areas stay out of an employee's nav. */
  const visibleItems = NAV_ITEMS.filter(
    (item) => (persona ?? 'employee') === 'manager' || item.href !== '/my-team',
  )

  return (
    <header className={classes.topBar}>
      <div className={classes.brand}>
        <span className={classes.brandMark}>
          <img src="/emids-logo.png" alt="EMIDS" />
        </span>
        <span className={classes.brandText}>EMIDS R&amp;R Portal</span>
      </div>
      <nav aria-label="Primary navigation" className={classes.nav}>
        {visibleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href, pathname) ? classes.active : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={classes.actions}>
        {persona && (
          <span
            className={`${classes.personaChip} ${persona === 'manager' ? classes.chipManager : classes.chipEmployee}`}
          >
            {persona === 'manager' ? 'People manager' : 'Employee'}
          </span>
        )}
        <button type="button" className={classes.iconBtn} aria-label="Search">
          <Search size={16} />
        </button>
        <button type="button" className={classes.iconBtn} aria-label="Notifications">
          <Bell size={16} />
        </button>
        <img src="/avatar-dashboard.png" alt="Shourya profile" />
        {persona && (
          <button
            type="button"
            className={classes.logoutBtn}
            aria-label="Sign out"
            onClick={() => {
              logout()
              router.push('/login')
            }}
          >
            <LogOut size={14} />
          </button>
        )}
      </div>
    </header>
  )
}
