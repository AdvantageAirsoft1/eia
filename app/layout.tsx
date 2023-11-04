import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Hydration from './components/Hydration'
import { ClerkProvider } from "@clerk/nextjs"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: 'East Idaho Airsoft',
  description: 'A Friendly Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Hydration>
            <Navbar />{children}
          </Hydration>
        </body>
      </html>
    </ClerkProvider>
  )
}
