'use client'

import { usePathname } from 'next/navigation'

import { TopBar } from '@/components/dashboard/top-bar'
import shellClasses from '@/app/shell.module.css'

/** Hides the chrome on the login page. */
export function SiteHeader() {
  const pathname = usePathname()

  if (pathname === '/login') {
    return null
  }

  return (
    <div className={shellClasses.topArea}>
      <TopBar />
    </div>
  )
}
