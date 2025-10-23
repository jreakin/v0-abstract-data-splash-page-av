"use client"

import { motion } from "framer-motion"
import { Building2, AlertTriangle, CheckCircle2 } from "lucide-react"

export function CompetitorBreakdown() {
  const competitors = [
    {
      name: "GOP Data Center",
      subtitle: "Legacy Platform",
      founded: 1999,
      issues: [
        "26-year-old platform from 1999",
        "Desktop browser only (not mobile compatible)",
        "Basic data matching (70-80% accuracy)",
        "Batch updates (data can be 2+ years old)",
      ],
      ourAdvantage: {
        title: "Modern Real-Time Architecture",
        details: [
          "Real-time processing means your data is always current, not months or years old",
          "99% accuracy through AI-powered validation and modern matching algorithms",
          "Mobile-first design works seamlessly on any device, anywhere",
          "Built with 2024 technology stack for speed and reliability",
        ],
      },
    },
    {
      name: "L2 Data",
      subtitle: "Industry Standard",
      founded: null,
      issues: [
        "Batch updates 3-8x per year (always stale data)",
        "Standardized schema (no flexibility)",
        "CPM-based pricing (costs add up fast)",
        "No AI field mapping",
      ],
      ourAdvantage: {
        title: "Flexible Real-Time Intelligence",
        details: [
          "Real-time capability means you get fresh data when you need it, not quarterly updates",
          "AI field mapping automatically adapts to your data structure without manual configuration",
          "Open architecture lets you customize workflows to match your exact needs",
          "Transparent pricing with no hidden CPM costs that spiral out of control",
        ],
      },
    },
    {
      name: "i360",
      subtitle: "Koch Network",
      founded: 2010,
      issues: [
        "Koch network exclusive (need connections)",
        "Expensive for non-network clients",
        "15 years of technical debt",
        "Proprietary black box",
        "Political gatekeeping",
      ],
      ourAdvantage: {
        title: "Open Access, Modern Technology",
        details: [
          "Available to all GOP campaigns and organizations - no political gatekeeping or network requirements",
          "Built from scratch in 2019 with modern architecture, not 15 years of accumulated technical debt",
          "Transparent operations - you understand exactly how your data is processed",
          "Fair pricing for everyone, not premium rates for non-network clients",
        ],
      },
    },
    {
      name: "Numinar",
      subtitle: '"World\'s First AI Platform"',
      founded: 2010,
      issues: [
        '"AI" is predictive modeling from 2010',
        "Weekly batch processing (not real-time)",
        "Pricing: $2,340-$9,659/month",
        "Rebranded automation, not intelligence",
      ],
      ourAdvantage: {
        title: "Actual Modern AI",
        details: [
          "Real AI using GPT-4 and modern machine learning, not rebranded 2010 predictive models",
          "True real-time processing - get results in minutes, not weekly batch updates",
          "Competitive pricing that delivers actual value, not inflated costs for outdated technology",
          "Genuine intelligence that learns and adapts, not just automated rules from 15 years ago",
        ],
      },
    },
    {
      name: "Aristotle",
      subtitle: "Campaign Manager",
      founded: 1983,
      issues: [
        "Founded 1983 (42 years of technical debt)",
        "C# .NET with SQL Server (1990s stack)",
        "Incremental updates (stable but not innovative)",
        "Legacy codebase with microservices bolted on",
      ],
      ourAdvantage: {
        title: "Zero Technical Debt, Modern Stack",
        details: [
          "Built from scratch in 2019 with modern architecture - no 42 years of accumulated technical debt",
          "Modern technology stack designed for today's challenges, not retrofitted 1990s systems",
          "Innovative by design - we can implement new features in days, not months",
          "Clean, maintainable codebase that's easy to extend and customize for your needs",
        ],
      },
    },
  ]

  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 mb-6">
            <Building2 className="w-4 h-4 text-[#00d9ff]" />
            <span className="text-sm text-[#00d9ff] font-mono">Competitor Analysis</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">The </span>
            <span className="text-[#00d9ff]">Competition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A detailed breakdown of what you're actually paying for
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {competitors.map((competitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#00d9ff]/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-1">{competitor.name}</h3>
                  <p className="text-gray-400">{competitor.subtitle}</p>
                  {competitor.founded && (
                    <p className="text-sm text-[#8b2635] mt-1">
                      Founded {competitor.founded} ({new Date().getFullYear() - competitor.founded} years old)
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#8b2635] mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    Their Limitations
                  </h4>
                  <ul className="space-y-2">
                    {competitor.issues.map((issue, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-[#8b2635] mt-0.5">×</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#00d9ff] mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    Our Advantage
                  </h4>
                  <div className="space-y-3">
                    <p className="text-base font-semibold text-[#00d9ff]">{competitor.ourAdvantage.title}</p>
                    <ul className="space-y-2">
                      {competitor.ourAdvantage.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-[#00d9ff] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
