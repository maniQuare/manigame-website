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
  Trophy,
  Users,
  Wallet,
} from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<"user" | "host">("user");
  const [remember, setRemember] = useState(true);

  return (
    <main className="min-h-screen bg-[#050b12] text-white flex items-center justify-center p-4 sm:p-6">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1100px] grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-800 bg-[#071018] shadow-2xl">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <section className="hidden lg:flex relative min-h-[700px] overflow-hidden">

          {/* FF MANI Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=90')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b12] via-[#050b12]/80 to-[#050b12]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b12] via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                <Gamepad2
                  size={26}
                  className="text-cyan-500"
                />
              </div>

              <h1 className="text-2xl font-bold">
                FF <span className="text-cyan-400">MANI</span>
              </h1>

            </div>

            {/* Hero Content */}
            <div className="max-w-[500px]">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-medium text-cyan-300 mb-6">

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />

                PLAY • BATTLE • WIN

              </div>

              <h2 className="text-5xl xl:text-6xl font-black leading-[1.05]">

                Welcome to
                <br />

                <span className="text-cyan-400">
                  FF MANI.
                </span>

              </h2>

              <p className="text-slate-300 mt-6 text-base leading-relaxed max-w-[430px]">
                Join FF MANI, connect with players, compete
                in battles and tournaments, and experience
                the ultimate gaming community.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-10">

                <Feature
                  icon={<Gamepad2 size={21} />}
                  title="500+"
                  text="Games"
                />

                <Feature
                  icon={<Users size={21} />}
                  title="1M+"
                  text="Players"
                />

                <Feature
                  icon={<Trophy size={21} />}
                  title="100+"
                  text="Battles"
                />

                <Feature
                  icon={<Wallet size={21} />}
                  title="Wallet"
                  text="Secure & Fast"
                />

              </div>

              {/* FF MANI Wallet */}
              <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl border border-cyan-400/10 bg-[#071018]/70 backdrop-blur-sm max-w-[360px]">

                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                  <Wallet
                    size={21}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <p className="text-xs text-slate-500">
                    FF MANI Wallet
                  </p>

                  <p className="text-sm font-bold text-white mt-0.5">
                    Fast • Secure • Reliable
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center gap-2 text-xs text-slate-500">

              <Shield
                size={14}
                className="text-cyan-400"
              />

              Secure FF MANI community

            </div>

          </div>
        </section>

        {/* =====================================================
            RIGHT SIDE - SIGN IN
        ===================================================== */}

        <section className="w-full flex items-center justify-center p-5 sm:p-8 lg:p-10">

          <div className="w-full max-w-[470px]">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">

                <Gamepad2
                  size={25}
                  className="text-cyan-500"
                />

              </div>

              <h1 className="text-2xl font-bold">
                FF <span className="text-cyan-400">MANI</span>
              </h1>

            </div>

            {/* Header */}
            <div className="mb-7">

              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium">
                Welcome Back to FF MANI
              </p>

              <h2 className="text-3xl sm:text-4xl font-black mt-2">
                Sign In
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Sign in and continue your FF MANI journey.
              </p>

            </div>

            {/* Login Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#09131e] p-5 sm:p-7">

              {/* User / Host */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#050b12] border border-slate-800">

                <button
                  type="button"
                  onClick={() => setLoginType("user")}
                  className={`
                    h-12 rounded-lg
                    flex items-center justify-center gap-2
                    text-sm font-semibold
                    transition-all
                    ${
                      loginType === "user"
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                        : "text-slate-500 hover:text-white"
                    }
                  `}
                >
                  <UserRound size={18} />
                  User
                </button>

                <button
                  type="button"
                  onClick={() => setLoginType("host")}
                  className={`
                    h-12 rounded-lg
                    flex items-center justify-center gap-2
                    text-sm font-semibold
                    transition-all
                    ${
                      loginType === "host"
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                        : "text-slate-500 hover:text-white"
                    }
                  `}
                >
                  <Shield size={18} />
                  Host
                </button>

              </div>

              {/* Selected */}
              <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                Signing in to

                <span className="text-slate-300 font-semibold">
                  FF MANI {loginType === "user" ? "User" : "Host"}
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
                  className="
                    w-full h-14 rounded-xl
                    border border-slate-800
                    bg-[#050b12]
                    pl-12 pr-4
                    text-sm text-white
                    outline-none
                    placeholder:text-slate-600
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/10
                    transition
                  "
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
                  className="
                    w-full h-14 rounded-xl
                    border border-slate-800
                    bg-[#050b12]
                    pl-12 pr-12
                    text-sm text-white
                    outline-none
                    placeholder:text-slate-600
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/10
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute right-4 top-1/2
                    -translate-y-1/2
                    text-slate-500
                    hover:text-white
                  "
                >

                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}

                </button>

              </div>

              {/* Remember */}
              <div className="flex items-center justify-between mt-4">

                <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 cursor-pointer">

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
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
                className="
                  group w-full h-14 mt-6
                  rounded-xl
                  bg-cyan-400
                  hover:bg-cyan-300
                  text-black font-bold
                  flex items-center justify-center gap-2
                  transition-all
                  shadow-xl shadow-cyan-400/10
                "
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
                className="
                  w-full min-h-[52px]
                  rounded-xl
                  border border-slate-800
                  bg-[#050b12]
                  hover:bg-slate-800/70
                  flex items-center justify-center
                  gap-3 text-sm font-medium
                  transition
                "
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

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 mt-6 text-[11px] text-slate-600">

              <Shield size={13} />

              Your FF MANI account is protected with secure authentication.

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-2">

      <div className="text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="font-bold text-sm">
          {title}
        </p>

        <p className="text-[10px] text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
}
