import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'

import { SessionProvider } from '@/components/session/session-provider'
import { AuthGate } from '@/components/session/auth-gate'
import { SiteHeader } from '@/components/session/site-header'

import shellClasses from './shell.module.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'EMIDS R&R Portal',
  description: 'Recognize teammates, track rewards and manage your team.',
  icons: {
    icon: '/emids-logo.png',
    apple: '/emids-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          <AuthGate>
            <main className={shellClasses.shell}>
              <SiteHeader />
              {children}
            </main>
          </AuthGate>
        </SessionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
