export type LedgerEntry = {
  id: string
  /** Points granted (positive number). */
  points: number
  kind: 'earned' | 'redeemed'
  label: string
  source: string
  date: string
}

/** Progress marker shown on the overview card. */
export const NEXT_REWARD = { name: '$25 Amazon gift card', goal: 500 } as const

export const LEDGER_SEED: LedgerEntry[] = [
  { id: 'led-1', kind: 'earned', points: 50, label: 'Recognition received', source: 'Priya Raman · Customer Champion', date: 'Oct 8' },
  { id: 'led-2', kind: 'earned', points: 25, label: 'Recognition received', source: 'Dana Cole · Leadership', date: 'Oct 5' },
  { id: 'led-3', kind: 'earned', points: 100, label: 'Recognition received', source: 'Marcus Webb · Going the Extra Mile', date: 'Sep 30' },
  { id: 'led-4', kind: 'earned', points: 25, label: 'Recognition received', source: 'Sarah Kim · Mentorship', date: 'Sep 12' },
  { id: 'led-5', kind: 'redeemed', points: 200, label: 'Team lunch voucher', source: 'Cafeteria', date: 'Sep 9' },
  { id: 'led-6', kind: 'earned', points: 250, label: 'Referral bonus', source: 'First referral joined', date: 'Aug 18' },
]
