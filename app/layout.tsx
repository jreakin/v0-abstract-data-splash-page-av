import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css" // Import globals.css at the top of the file
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abstract Data | Next-Generation Software Engineering",
  description:
    "Cutting-edge enterprise software systems. Custom development, data engineering, and AI integration. Building tomorrow's solutions today.",
  generator: "v0.app",
  openGraph: {
    title: "Abstract Data | Next-Generation Software Engineering",
    description:
      "Cutting-edge enterprise software systems. Custom development, data engineering, and AI integration. Building tomorrow's solutions today.",
    url: "https://v0-abstract-data-splash-page-av.pages.dev",
    siteName: "Abstract Data",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abstract Data | Next-Generation Software Engineering",
    description:
      "Cutting-edge enterprise software systems. Custom development, data engineering, and AI integration. Building tomorrow's solutions today.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
