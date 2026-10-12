'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Persona = 'employee' | 'manager'

type Session = {
  persona: Persona | null
  /** True once the stored persona has been read — gates depend on this. */
  checked: boolean
  login: (persona: Persona) => void
  logout: () => void
}

const SessionContext = createContext<Session>({
  persona: null,
  checked: false,
  login: () => {},
  logout: () => {},
})

const STORAGE_KEY = 'rewards-persona'

export function SessionProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'employee' || stored === 'manager') {
      setPersona(stored)
    }
    setChecked(true)
  }, [])

  function login(next: Persona) {
    window.localStorage.setItem(STORAGE_KEY, next)
    setPersona(next)
  }

  function logout() {
    window.localStorage.removeItem(STORAGE_KEY)
    setPersona(null)
  }

  return (
    <SessionContext.Provider value={{ persona, checked, login, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}
