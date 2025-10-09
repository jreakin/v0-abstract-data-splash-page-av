"use client"

export function ScanlineEffect() {
  return (
    <>
      {/* Horizontal scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[2] opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,217,255,0.03)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* Animated scanning beam */}
      <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-30 animate-scan-line shadow-[0_0_20px_#00d9ff]" />
      </div>

      {/* Secondary slower scan */}
      <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
        <div
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-20 animate-scan-line shadow-[0_0_15px_#d4af37]"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>
    </>
  )
}
