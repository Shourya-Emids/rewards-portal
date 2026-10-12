'use client'

import { useRouter } from 'next/navigation'
import { Briefcase, Sprout, User, type LucideIcon } from 'lucide-react'

import { useSession, type Persona } from '@/components/session/session-provider'

import classes from './login.module.css'

const LOGIN_OPTIONS: {
  id: Persona
  title: string
  icon: LucideIcon
  blurb: string
}[] = [
  {
    id: 'employee',
    title: 'Employee',
    icon: User,
    blurb: 'Recognize peers, send kudos, react and view your wallet.',
  },
  {
    id: 'manager',
    title: 'People Manager',
    icon: Briefcase,
    blurb: 'See the org tree, approve point requests and manage your team.',
  },
]

export function LoginView() {
  const router = useRouter()
  const { login } = useSession()

  function enter(persona: Persona) {
    login(persona)
    router.push('/')
  }

  return (
    <div className={classes.loginPage}>
      <div className={classes.inner}>
        <span className={classes.brandMark} aria-hidden="true">
          <Sprout size={20} strokeWidth={1.8} />
        </span>
        <h1>Welcome to Rewards</h1>
        <p className={classes.tagline}>Log in with how you work today.</p>

        <div className={classes.options}>
          {LOGIN_OPTIONS.map((option) => {
            const Icon = option.icon
            return (
              <article key={option.id} className={classes.optionCard}>
                <span className={classes.optionIcon} aria-hidden="true">
                  <Icon size={17} />
                </span>
                <h2>{option.title}</h2>
                <p className={classes.optionBlurb}>{option.blurb}</p>
                <button
                  type="button"
                  className={classes.loginBtn}
                  onClick={() => enter(option.id)}
                >
                  Log in as {option.title}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
