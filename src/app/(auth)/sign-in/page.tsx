"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  UserRound,
  MessageCircle,
} from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<"user" | "host">("user");
  const [remember, setRemember] = useState(true);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-[#050b12] text-white relative overflow-hidden">

      {/* Original Gaming Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[-150px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-150px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      {/* Sign In */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">

        <section className="w-full max-w-[460px]">

          {/* Logo */}
          <div className="flex justify-center items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-cyan-400/10">
              <Gamepad2
                size={27}
                className="text-cyan-500"
              />
            </div>

            <h1 className="text-3xl font-black">
              FF <span className="text-cyan-400">MANI</span>
            </h1>

          </div>

          {/* Heading */}
          <div className="text-center mb-7">

            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium">
              Welcome Back
            </p>

            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              Sign In
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Sign in to continue to FF MANI.
            </p>

          </div>

          {/* Card */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#09131e]/95 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-black/30">

            {/* User / Host */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#050b12] border border-slate-800">

              <button
                type="button"
                onClick={() => setLoginType("user")}
                className={`h-12 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                  loginType === "user"
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                <UserRound size={18} />
                User
              </button>

              <button
                type="button"
                onClick={() => setLoginType("host")}
                className={`h-12 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                  loginType === "host"
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                <Shield size={18} />
                Host
              </button>

            </div>

            {/* Login Type */}
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">

              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

              Signing in as

              <span className="text-slate-300 font-semibold">
                {loginType === "user" ? "User" : "Host"}
              </span>

            </div>

            {/* Email */}
            <div className="relative mt-5">

              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                placeholder={
                  loginType === "host"
                    ? "Host email address"
                    : "Email address"
                }
                className="w-full h-14 rounded-xl border border-slate-800 bg-[#050b12] pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition"
              />

            </div>

            {/* Password */}
            <div className="relative mt-4">

              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 rounded-xl border border-slate-800 bg-[#050b12] pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between mt-4">

              <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 cursor-pointer">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 accent-cyan-400"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300"
              >
                Forgot password?
              </button>

            </div>

            {/* Sign In */}
            <button
              type="button"
              className="group w-full h-14 mt-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-400/10"
            >
              Sign In

              <ArrowRight
                size={19}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="h-px bg-slate-800 flex-1" />

              <span className="text-[11px] text-slate-600">
                OR
              </span>

              <div className="h-px bg-slate-800 flex-1" />

            </div>

            {/* WhatsApp */}
            <button
              type="button"
              className="w-full min-h-[52px] rounded-xl border border-slate-800 bg-[#050b12] hover:bg-slate-800/70 flex items-center justify-center gap-3 text-sm font-medium transition"
            >
              <MessageCircle size={18} />

              Continue with WhatsApp
            </button>

            {/* Contact */}
            <p className="text-center text-xs sm:text-sm text-slate-600 mt-6">

              Need help with FF MANI?{" "}

              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Contact us
              </button>

            </p>

          </div>

          {/* Security */}
          <div className="flex items-center justify-center gap-2 mt-6 text-[11px] text-slate-600">

            <Shield size={13} />

            Your FF MANI account is protected.

          </div>

        </section>

      </div>
    </main>
  );
          }
