"use client"

import Link from "next/link"
import { KonamiCode } from "@/components/konami-code"

export default function NotFound() {
  return (
    <>
      <KonamiCode />
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
        <div className="max-w-2xl text-center space-y-8">
          {/* 404 Header */}
          <div className="space-y-4">
            <h1 className="text-9xl font-bold text-[#00D9FF] animate-pulse">404</h1>
            <h2 className="text-3xl font-semibold text-gray-200">Page Not Found</h2>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <p className="text-xl text-gray-400">Looks like you've wandered into uncharted territory.</p>
            <p className="text-lg text-gray-500">
              Unlike our competitors' systems, at least our 404 page actually works.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center pt-4">
            <Link
              href="/"
              className="px-8 py-3 bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold rounded-md transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/competitors"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md transition-colors"
            >
              See Why We're Better
            </Link>
          </div>

          {/* Easter egg hint */}
          <p className="text-sm text-gray-600 pt-8">Hint: Try the Konami code ↑↑↓↓←→←→BA</p>
        </div>
      </div>
    </>
  )
}
