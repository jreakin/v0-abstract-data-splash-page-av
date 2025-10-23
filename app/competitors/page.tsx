import type { Metadata } from "next"
import CompetitorsClient from "./competitors-client"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Competitor Analysis | Abstract Data - Real AI vs Marketing Buzzwords",
  description:
    "See how Abstract Data's 2024 technology stack, 99% AI validation accuracy, and modern architecture compare to GOP platforms running on 1983-2019 technology. Campaign Sidekick breach, GOP Data Center's 23-year-old infrastructure, and Numinar's AI washing exposed.",
  openGraph: {
    title: "Competitor Analysis | Abstract Data",
    description:
      "Real AI vs Marketing Buzzwords. 30-50x faster processing. 99% validation accuracy. 2024 technology vs 1983-2019 legacy systems.",
    type: "website",
    images: [
      {
        url: "/og-competitors.png",
        width: 1200,
        height: 630,
        alt: "Abstract Data Competitor Analysis - HUD Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Analysis | Abstract Data",
    description: "Real AI vs Marketing Buzzwords. See the technical superiority.",
  },
}

export default function CompetitorsPage() {
  return <CompetitorsClient />
}
