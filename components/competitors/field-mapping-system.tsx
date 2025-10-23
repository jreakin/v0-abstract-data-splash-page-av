"use client"

import { motion } from "framer-motion"
import { FileSearch, Sparkles, Clock, CheckCircle2 } from "lucide-react"

export function FieldMappingSystem() {
  const columnVariations = [
    {
      field: "Voter Registration ID",
      variations: [
        "voterid",
        "voter_id",
        "registration_number",
        "voter_reg_num",
        "registrant_id",
        "reg_id",
        "voter_number",
      ],
    },
    {
      field: "First Name",
      variations: ["first_name", "fname", "first", "given_name", "firstname", "f_name"],
    },
    {
      field: "Party Affiliation",
      variations: ["party", "party_affiliation", "political_party", "party_code", "affiliation", "reg_party"],
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-mono">Industry First Technology</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">AI-Powered </span>
            <span className="text-[#d4af37]">Field Mapping</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No other GOP platform has this capability. We automatically recognize any vendor format.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 mb-16">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8b2635]/10 to-transparent border border-[#8b2635]/30 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#8b2635]" />
              <h3 className="text-2xl font-bold text-white">The Problem Every Campaign Faces</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Vendor files use different column names for the same data. Campaigns waste weeks manually mapping each
                new vendor file.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635] mt-1">✗</span>
                  <span>L2 requires vendors to conform to their standardized schema</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635] mt-1">✗</span>
                  <span>GOP Data Center only accepts state files in specific formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635] mt-1">✗</span>
                  <span>Vottiv can't process raw vendor files at all</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635] mt-1">✗</span>
                  <span>Manual mapping takes days or weeks per vendor</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00d9ff]/10 to-transparent border border-[#00d9ff]/30 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileSearch className="w-8 h-8 text-[#00d9ff]" />
              <h3 className="text-2xl font-bold text-white">Our Solution</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-[#00d9ff] font-bold">
                AI agents automatically recognize vendor formats. Zero manual mapping.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00d9ff] mt-1 flex-shrink-0" />
                  <span>Scans file headers and samples values</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00d9ff] mt-1 flex-shrink-0" />
                  <span>Identifies unknown fields automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00d9ff] mt-1 flex-shrink-0" />
                  <span>Generates configuration in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00d9ff] mt-1 flex-shrink-0" />
                  <span>Any vendor. Any format. Instantly.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Column Variations Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How Our AI Field Recognition Works</h3>
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-8">
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-[#00d9ff] font-bold mb-2">Pattern Recognition & Semantic Analysis</h4>
                <p className="text-sm">
                  Our AI models analyze column headers, data patterns, and value distributions to understand field
                  semantics. The system recognizes naming conventions across vendors without requiring predefined
                  mappings.
                </p>
              </div>
              <div>
                <h4 className="text-[#00d9ff] font-bold mb-2">Contextual Understanding</h4>
                <p className="text-sm">
                  Machine learning models evaluate data types, value ranges, and relationships between fields to
                  determine correct mappings even when column names are ambiguous or non-standard.
                </p>
              </div>
              <div>
                <h4 className="text-[#00d9ff] font-bold mb-2">Continuous Learning</h4>
                <p className="text-sm">
                  The system improves with each vendor file processed, expanding its recognition capabilities without
                  manual intervention. New naming patterns are automatically incorporated into the model.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">
            What takes other platforms <span className="text-[#8b2635] font-bold">days of manual work</span> takes our
            AI <span className="text-[#00d9ff] font-bold">seconds of automated analysis</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
