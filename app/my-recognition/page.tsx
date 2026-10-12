import type { Metadata } from 'next'

import { RecognitionView } from '@/components/my-recognition/recognition-view'

export const metadata: Metadata = {
  title: 'My Recognition — EMIDS R&R Portal',
}

export default function MyRecognitionPage() {
  return <RecognitionView />
}
