import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abingdon on Thames Quartz Worktops',
  description: 'Premium quartz worktops with expert installation. 5-day turnaround. On-site template visits and professional fitting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream">{children}</body>
    </html>
  )
}
