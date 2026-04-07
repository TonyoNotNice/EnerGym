import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

// Load Montserrat font from Google Fonts with Latin subset for optimal performance
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadata configuration for SEO and social sharing
export const metadata: Metadata = {
  title: 'ENERGYM | Stronger Every Day',
  description: 'Transform your body. Transform your life. Join ENERGYM for world-class facilities, expert trainers, and a community that pushes you to be your best.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Viewport configuration for mobile optimization and theme color
export const viewport: Viewport = {
  themeColor: '#111111',
}

// Root layout component that wraps all pages
// Provides consistent navigation, footer, and global styles
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Global navigation bar */}
        <Navbar />
        {/* Main page content */}
        {children}
        {/* Site footer */}
        <Footer />
        {/* Analytics tracking */}
        <Analytics />
      </body>
    </html>
  )
}
