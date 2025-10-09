export const runtime = 'edge'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#00d9ff] mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#00d9ff] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
