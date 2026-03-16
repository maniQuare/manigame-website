"use client"

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black text-white px-6 py-3">
      <div className="font-bold text-lg">bsf1010pro</div>

      <div className="flex items-center gap-4">
        <button className="bg-yellow-500 px-3 py-1 rounded text-black">
          Agent Offer
        </button>

        <button className="text-sm">Sign Out</button>
      </div>
    </header>
  )
}