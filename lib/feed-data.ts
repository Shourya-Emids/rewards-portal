export type FeedComment = {
  id: string
  author: string
  avatar: string
  text: string
}

export type FeedPost = {
  id: string
  /** Person giving the recognition. */
  author: string
  avatar: string
  recipient: string
  /** Points awarded with the recognition. 0 when none were granted. */
  points: number
  /** Recognition category, e.g. "Customer Champion". */
  category: string
  message: string
  timeAgo: string
  likes: number
  liked: boolean
  comments: FeedComment[]
}

export type TeamMember = {
  id: string
  name: string
  role: string
  avatar: string
}

/** Points the recognize panel offers as presets. */
export const POINT_OPTIONS = [10, 25, 50, 100] as const

/** Recognition categories available in the recognize panel. */
export const RECOGNITION_TYPES = [
  'Customer Champion',
  'Team Player',
  'Mentorship',
  'Leadership',
  'Going the Extra Mile',
] as const

export type RecognitionType = (typeof RECOGNITION_TYPES)[number]

const MAIN_AVATAR = '/avatar-dashboard.png'
const ALT_AVATAR = '/placeholder-user.jpg'

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'member-1', name: 'David Chen', role: 'Engineering', avatar: MAIN_AVATAR },
  { id: 'member-2', name: 'Maya Fernandez', role: 'Account Manager', avatar: ALT_AVATAR },
  { id: 'member-3', name: 'Marcus Webb', role: 'Product', avatar: MAIN_AVATAR },
  { id: 'member-4', name: 'Dana Cole', role: 'Data Analyst', avatar: ALT_AVATAR },
  { id: 'member-5', name: 'Sarah Kim', role: 'Support Lead', avatar: MAIN_AVATAR },
  { id: 'member-6', name: 'Luis Ortega', role: 'Engineering', avatar: ALT_AVATAR },
]

export const SEED_POSTS: FeedPost[] = [
  {
    id: 'post-1',
    author: 'Priya Raman',
    avatar: MAIN_AVATAR,
    recipient: 'David Chen',
    category: 'Teamwork',
    points: 100,
    message:
      'David rebuilt the entire onboarding flow over the weekend and onboarded 3 new clients this Monday without a single hiccup. Absolute machine.',
    timeAgo: '2h ago',
    likes: 24,
    liked: false,
    comments: [
      {
        id: 'post-1-c1',
        author: 'Evan Kulas',
        avatar: ALT_AVATAR,
        text: 'This is the kind of initiative that moves the whole team forward. Well done!',
      },
      {
        id: 'post-1-c2',
        author: 'Marcus Webb',
        avatar: MAIN_AVATAR,
        text: 'The new flow is night and day. Great work David!',
      },
    ],
  },
  {
    id: 'post-2',
    author: 'Dana Cole',
    avatar: ALT_AVATAR,
    recipient: 'Maya Fernandez',
    category: 'Client Impact',
    points: 50,
    message:
      'Maya turned around an account that was two weeks from churning. The client renewal email made my whole morning.',
    timeAgo: '5h ago',
    likes: 41,
    liked: true,
    comments: [
      {
        id: 'post-2-c1',
        author: 'Sarah Kim',
        avatar: MAIN_AVATAR,
        text: 'That renewal was all yours Maya. Incredible save!',
      },
    ],
  },
  {
    id: 'post-3',
    author: 'Luis Ortega',
    avatar: ALT_AVATAR,
    recipient: 'Sarah Kim',
    category: 'Mentorship',
    points: 25,
    message:
      'Sarah spent her entire launch week mentoring the two new analysts through their first escalations. Thank you for paying it forward.',
    timeAgo: '1d ago',
    likes: 12,
    liked: false,
    comments: [],
  },
  {
    id: 'post-4',
    author: 'Evan Kulas',
    avatar: MAIN_AVATAR,
    recipient: 'Marcus Webb',
    category: 'Leadership',
    points: 50,
    message:
      'Marcus led the quarterly client demo single-handedly after our presenter dropped out the night before. Cool, calm and flawless.',
    timeAgo: '2d ago',
    likes: 33,
    liked: false,
    comments: [
      {
        id: 'post-4-c1',
        author: 'Dana Cole',
        avatar: ALT_AVATAR,
        text: 'You could not tell he stepped in last minute. Brilliant',
      },
      {
        id: 'post-4-c2',
        author: 'Priya Raman',
        avatar: MAIN_AVATAR,
        text: 'The client feedback was glowing. Nice save!',
      },
    ],
  },
]
