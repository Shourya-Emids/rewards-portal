export type NavItem = {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/' },
  { label: 'My Wallet', href: '/my-rewards' },
  { label: 'My Recognition', href: '/my-recognition' },
  { label: 'My Team', href: '/my-team' },
]

export type TeamLeaderboardEntry = {
  rank: number
  name: string
  points: number
  avatar: string
  isCurrentUser?: boolean
}

/** "My progress" facts inside the Leaderboard tile. */
export const MY_PROGRESS = { percent: 57, points: 2850 }

/** Quarter-end reminder shown in the dashboard banner tile. */
export const QUARTER_REMINDER = {
  quarter: 'Q4',
  endsOn: 'Oct 24',
  daysLeft: 12,
}

/** Team leaderboard shown inside the Leaderboard tile. */
export const TEAM_LEADERBOARD: TeamLeaderboardEntry[] = [
  { rank: 1, name: 'Marcus Webb', points: 340, avatar: '/avatar-dashboard.png' },
  { rank: 2, name: 'Shourya', points: 285, avatar: '/avatar-dashboard.png', isCurrentUser: true },
  { rank: 3, name: 'David Chen', points: 260, avatar: '/placeholder-user.jpg' },
  { rank: 4, name: 'Maya Fernandez', points: 210, avatar: '/placeholder-user.jpg' },
]
