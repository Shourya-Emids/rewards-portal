'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useSession } from './session-provider'
import classes from './auth-gate.module.css'

/**
 * Entry gate: every route except /login requires a chosen persona.
 * Unauthenticated visitors are redirected to the login portal.
 */
export function AuthGate({ children }: { children: ReactNode }) {
  const { persona, checked } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const onLoginRoute = pathname === '/login'

  useEffect(() => {
    if (checked && persona === null && !onLoginRoute) {
      router.replace('/login')
    }
  }, [checked, persona, onLoginRoute, router])

  if (!checked) {
    return (
      <div className={classes.loading} aria-busy="true">
        <span className={classes.spinner} />
      </div>
    )
  }

  if (!onLoginRoute && persona === null) {
    return (
      <div className={classes.loading} aria-busy="true">
        <span className={classes.spinner} />
      </div>
    )
  }

  return <>{children}</>
}
