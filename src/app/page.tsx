"use client"

import { useState } from "react"
import { Eye, EyeOff, User } from "lucide-react"

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false)

  return (

    <div className="min-h-screen flex items-center pb-4 justify-center bg-gradient-to-b from-gray-700 to-black">

      <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[340px]">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            DREAM <span className="text-orange-400">444</span>
          </h1>
        </div>

        {/* Username */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 pl-10 rounded-md border border-green-500 bg-white text-black outline-none"
          />

          <User className="absolute left-3 top-3 text-black" size={18} />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 pl-3 pr-10 rounded-md border border-green-500 bg-white text-black outline-none"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-md">
          Login →
        </button>

      </div>

    </div>

  )
}