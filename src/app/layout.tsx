import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Uzi Cohen | QA Automation Engineer',
  description: 'QA Automation Engineer with hands-on experience in Selenium, Appium, Java, Python, and CI/CD. Skilled in mobile test automation, web test automation, SDK testing, and API validation.',
  keywords: ['QA Engineer', 'Automation Engineer', 'Selenium', 'Appium', 'Python', 'Java', 'Testing', 'Software Quality'],
  authors: [{ name: 'Uzi Cohen' }],
  openGraph: {
    title: 'Uzi Cohen | QA Automation Engineer',
    description: 'QA Automation Engineer specializing in test automation and quality assurance',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzi Cohen | QA Automation Engineer',
    description: 'QA Automation Engineer specializing in test automation and quality assurance',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased" style={{ fontFamily: '"Lucida Grande", "Segoe UI", Tahoma, Verdana, Arial, sans-serif' }}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
