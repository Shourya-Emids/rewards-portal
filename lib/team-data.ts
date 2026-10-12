export type OrgMember = {
  id: string
  name: string
  role: string
  avatar: string
  isCurrentUser?: boolean
  reports?: OrgMember[]
}

/** Org tree rooted at the signed-in manager. */
export const ORG_TREE: OrgMember = {
  id: 'you',
  name: 'Shourya',
  role: 'Team Lead',
  avatar: '/avatar-dashboard.png',
  isCurrentUser: true,
  reports: [
    {
      id: 'priya',
      name: 'Priya Raman',
      role: 'Engineering Lead',
      avatar: '/avatar-dashboard.png',
      reports: [
        {
          id: 'david',
          name: 'David Chen',
          role: 'Engineer',
          avatar: '/placeholder-user.jpg',
        },
      ],
    },
    {
      id: 'sarah',
      name: 'Sarah Kim',
      role: 'Support Lead',
      avatar: '/placeholder-user.jpg',
      reports: [
        {
          id: 'luis',
          name: 'Luis Ortega',
          role: 'Support Engineer',
          avatar: '/avatar-dashboard.png',
        },
      ],
    },
    {
      id: 'maya',
      name: 'Maya Fernandez',
      role: 'Account Manager',
      avatar: '/placeholder-user.jpg',
    },
    {
      id: 'marcus',
      name: 'Marcus Webb',
      role: 'Product',
      avatar: '/placeholder-user.jpg',
    },
    {
      id: 'dana',
      name: 'Dana Cole',
      role: 'Data Analyst',
      avatar: '/placeholder-user.jpg',
    },
  ],
}

export type PointApprovalRequest = {
  id: string
  /** Employee requesting approval. */
  from: string
  fromAvatar: string
  /** Colleague who would receive the points. */
  to: string
  toAvatar: string
  points: number
  category: string
  message: string
  date: string
}

export const APPROVAL_REQUESTS: PointApprovalRequest[] = [
  {
    id: 'apr-1',
    from: 'Dana Cole',
    fromAvatar: '/placeholder-user.jpg',
    to: 'Maya Fernandez',
    toAvatar: '/placeholder-user.jpg',
    points: 25,
    category: 'Mentorship',
    message: 'Maya walked me through the churn model and saved my analysis.',
    date: 'Oct 10',
  },
  {
    id: 'apr-2',
    from: 'Luis Ortega',
    fromAvatar: '/avatar-dashboard.png',
    to: 'Sarah Kim',
    toAvatar: '/placeholder-user.jpg',
    points: 50,
    category: 'Customer Champion',
    message: 'Sarah covered three escalations over the weekend without being asked.',
    date: 'Oct 9',
  },
  {
    id: 'apr-3',
    from: 'David Chen',
    fromAvatar: '/placeholder-user.jpg',
    to: 'Marcus Webb',
    toAvatar: '/placeholder-user.jpg',
    points: 25,
    category: 'Going the Extra Mile',
    message: 'Marcus rewrote my product doc before the review, over and above for sure.',
    date: 'Oct 8',
  },
]
