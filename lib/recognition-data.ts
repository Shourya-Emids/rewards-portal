export type ReceivedRecognition = {
  id: string
  from: string
  fromAvatar: string
  category: string
  points: number
  date: string
}

export const RECEIVED_RECOGNITIONS: ReceivedRecognition[] = [
  {
    id: 'rr-1',
    from: 'Priya Raman',
    fromAvatar: '/avatar-dashboard.png',
    category: 'Customer Champion',
    points: 50,
    date: 'Oct 8',
  },
  {
    id: 'rr-2',
    from: 'Dana Cole',
    fromAvatar: '/placeholder-user.jpg',
    category: 'Leadership',
    points: 25,
    date: 'Oct 5',
  },
  {
    id: 'rr-3',
    from: 'Marcus Webb',
    fromAvatar: '/avatar-dashboard.png',
    category: 'Going the Extra Mile',
    points: 100,
    date: 'Sep 30',
  },
  {
    id: 'rr-4',
    from: 'Sarah Kim',
    fromAvatar: '/placeholder-user.jpg',
    category: 'Mentorship',
    points: 25,
    date: 'Sep 12',
  },
]

export type GivenRecognition = {
  id: string
  to: string
  toAvatar: string
  category: string
  points: number
  date: string
}

export const GIVEN_RECOGNITIONS: GivenRecognition[] = [
  {
    id: 'g-1',
    to: 'David Chen',
    toAvatar: '/avatar-dashboard.png',
    category: 'Customer Champion',
    points: 50,
    date: 'Oct 10',
  },
  {
    id: 'g-2',
    to: 'Maya Fernandez',
    toAvatar: '/placeholder-user.jpg',
    category: 'Mentorship',
    points: 25,
    date: 'Oct 4',
  },
  {
    id: 'g-3',
    to: 'Sarah Kim',
    toAvatar: '/placeholder-user.jpg',
    category: 'Leadership',
    points: 50,
    date: 'Sep 28',
  },
]

/** Stats for the summary strip. */
export const MY_RECOGNITION_STATS = {
  pointsEarned: 200,
}
