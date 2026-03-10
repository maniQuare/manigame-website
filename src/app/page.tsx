"use client"

import { useState } from "react"
import { Eye, EyeOff, User } from "lucide-react"
import Login from "./components/Login"

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false)

  return (

   <div><Login/></div>

  )
}