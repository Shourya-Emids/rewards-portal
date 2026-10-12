'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Persona = 'employee' | 'manager'

type Session = {
  persona: Persona | null
  login: (persona: Persona) => void
  logout: () => void
}

const SessionContext = createContext<Session>({
  persona: null,
  login: () => {},
  logout: () => {},
})

const STORAGE_KEY = 'rewards-persona'

export function SessionProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'employee' || stored === 'manager') {
      setPersona(stored)
    }
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
    <SessionContext.Provider value={{ persona, login, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}
