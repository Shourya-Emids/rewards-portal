import type { Metadata } from 'next'

import { RewardsView } from '@/components/my-rewards/rewards-view'

export const metadata: Metadata = {
  title: 'My Wallet — EMIDS R&R Portal',
}

export default function MyRewardsPage() {
  return <RewardsView />
}
