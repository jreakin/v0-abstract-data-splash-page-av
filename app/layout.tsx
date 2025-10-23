import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google"
import Script from "next/script"
import "./globals.css" // Import globals.css at the top of the file
import { ClientLayout } from "@/components/client-layout"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BF35363PWL" strategy="beforeInteractive" />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BF35363PWL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tquuunpm51");
          `}
        </Script>

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a36b08034d08488897ab8da3dde8e45b"}'
          strategy="beforeInteractive"
        />
      </head>

      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
