"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-500">500</h1>
        <h2 className="text-2xl font-semibold">Internal Server Error</h2>
        <p className="text-gray-400">Something went wrong on our end. We're working to fix it.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Try Again
          </button>
          <Link href="/" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
