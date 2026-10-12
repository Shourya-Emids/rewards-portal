import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'

import { SessionProvider } from '@/components/session/session-provider'
import { AuthGate } from '@/components/session/auth-gate'
import { SiteHeader } from '@/components/session/site-header'

import shellClasses from './shell.module.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rewards Dashboard',
  description: 'A personal rewards and progress dashboard.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
