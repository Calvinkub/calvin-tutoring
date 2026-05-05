import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ครูพี่แคลวิณ - สอนพิเศษ Python SQL AI',
  description: 'เรียน Python, SQL, AI จากนักเรียน AI Engineering ที่มีประสบการณ์จริง',
  keywords: 'Python, SQL, AI, Machine Learning, Data Science, สอนพิเศษ',
  openGraph: {
    title: 'พี่แคลวิณ - สอนพิเศษ Python SQL AI',
    description: 'เรียน Python, SQL, AI จากนักเรียน AI Engineering ที่มีประสบการณ์จริง',
    url: 'https://calvin-tutoring.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
