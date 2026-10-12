import type { Metadata } from 'next'

import { TeamView } from '@/components/my-team/team-view'

export const metadata: Metadata = {
  title: 'My Team — Rewards Dashboard',
}

export default function MyTeamPage() {
  return <TeamView />
}
