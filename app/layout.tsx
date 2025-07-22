import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OrganicGrow - Professional Social Media Growth Services",
  description:
    "Boost your social presence with 100% organic followers, likes, and views. Trusted by cybersecurity experts. No bots, no fake accounts - just real engagement.",
  keywords:
    "social media growth, organic followers, instagram growth, youtube growth, tiktok growth, social media marketing",
    generator: 'v0.dev'
}

export default function RootLayout({ children, } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
