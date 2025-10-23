import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-bold text-cyan-400">404</h1>
        <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
