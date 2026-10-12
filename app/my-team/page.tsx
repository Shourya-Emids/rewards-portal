import type { Metadata } from 'next'

import { TeamView } from '@/components/my-team/team-view'

export const metadata: Metadata = {
  title: 'My Team — EMIDS R&R Portal',
}

export default function MyTeamPage() {
  return <TeamView />
}
