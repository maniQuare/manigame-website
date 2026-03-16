"use client"

import React from "react"

const menuItems = [
  "Dashboard",
  "Live Matches",
  "Completed Matches",
  "Block Market",
  "Manage Clients",
  "Manage Password",
  "Manage Ledgers",
  "All Reports",
  "Bet List Live",
  "Userwise Comm",
  "Total Deposit & Withdrawal",
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <div className="text-xl font-bold mb-6">BSF1010PRO</div>

      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}