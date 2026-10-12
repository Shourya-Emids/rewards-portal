import type { Metadata } from 'next'

import { LoginView } from '@/components/login/login-view'

export const metadata: Metadata = {
  title: 'Sign in — Rewards Dashboard',
}

export default function LoginPage() {
  return <LoginView />
}
