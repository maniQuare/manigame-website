"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  Trophy,
} from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <main className="min-h-screen bg-[#050a18] text-white overflow-hidden">
      <div className="min-h-screen flex">

        {/* LEFT SIDE */}
        <section className="relative hidden lg:flex lg:w-1/2 min-h-screen overflow-hidden">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/gaming-bg.jpg')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/95 via-[#07102a]/80 to-[#050a18]/95" />

          {/* Blue glow */}
          <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -left-40 bottom-0" />

          {/* Content */}
          <div className="relative z-10 w-full p-10 flex flex-col">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Gamepad2 className="text-[#1769ff]" size={29} />
              </div>

              <h1 className="text-3xl font-bold">
                Game<span className="text-blue-500">Types</span>
              </h1>
            </div>

            {/* Hero */}
            <div className="flex-1 flex flex-col justify-center max-w-xl">

              <h2 className="text-6xl font-bold leading-tight">
                Welcome Back,
                <br />
                <span className="text-blue-500">Gamer!</span>
              </h2>

              <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                Sign in to continue your game journey
                <br />
                and explore new challenges.
              </p>

              <div className="flex gap-8 mt-14">

                <Feature
                  icon={<Gamepad2 size={25} />}
                  title="Play"
                  text="Popular Games"
                />

                <Feature
                  icon={<Users size={25} />}
                  title="Connect"
                  text="With Friends"
                />

                <Feature
                  icon={<Trophy size={25} />}
                  title="Win"
                  text="Rewards"
                />

              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-5 py-10 bg-[#060b19]">

          <div className="w-full max-w-[560px]">

            {/* Top navigation */}
            <div className="hidden sm:flex justify-end gap-5 text-sm tracking-[4px] text-slate-400 mb-8">
              <span>PLAY</span>
              <span>/</span>
              <span>CONNECT</span>
              <span>/</span>
              <span>WIN</span>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-slate-700/60 bg-[#0c1426]/90 backdrop-blur-xl p-7 sm:p-10 shadow-2xl">

              <h2 className="text-4xl font-bold">
                Sign In
              </h2>

              <p className="text-slate-400 mt-2">
                Enter your details to get started
              </p>

              {/* Tabs */}
              <div className="grid grid-cols-2 mt-10 border border-slate-700 rounded-xl p-1">

                <button
                  className="
                    py-3 rounded-lg
                    bg-blue-600
                    font-semibold
                    shadow-lg shadow-blue-600/20
                  "
                >
                  Email
                </button>

                <button
                  className="
                    py-3 rounded-lg
                    text-slate-400
                    hover:text-white
                    transition
                  "
                >
                  Phone
                </button>

              </div>

              {/* Email */}
              <div className="relative mt-8">
                <Mail
                  size={21}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="
                    w-full h-16
                    rounded-xl
                    border border-slate-700
                    bg-[#080f20]
                    pl-14 pr-5
                    text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                />
              </div>

              {/* Password */}
              <div className="relative mt-5">
                <Lock
                  size={21}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="
                    w-full h-16
                    rounded-xl
                    border border-slate-700
                    bg-[#080f20]
                    pl-14 pr-14
                    text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute right-5 top-1/2
                    -translate-y-1/2
                    text-slate-400
                    hover:text-white
                  "
                >
                  {showPassword ? (
                    <EyeOff size={21} />
                  ) : (
                    <Eye size={21} />
                  )}
                </button>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between mt-5 text-sm">

                <label className="flex items-center gap-3 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-5 h-5 accent-blue-600"
                  />

                  Remember me
                </label>

                <button className="text-blue-500 hover:text-blue-400">
                  Forgot password?
                </button>

              </div>

              {/* Sign In */}
              <button
                className="
                  group
                  w-full h-16
                  mt-7
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  font-semibold
                  text-lg
                  flex items-center justify-center gap-3
                  shadow-xl shadow-blue-600/20
                  transition-all
                "
              >
                Sign In

                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              {/* OR */}
              <div className="flex items-center gap-4 my-8">
                <div className="h-px bg-slate-700 flex-1" />

                <span className="text-slate-500 text-sm">
                  OR
                </span>

                <div className="h-px bg-slate-700 flex-1" />
              </div>

              {/* Google */}
              <button
                className="
                  w-full h-14
                  rounded-xl
                  border border-slate-700
                  hover:bg-slate-800
                  flex items-center justify-center
                  gap-3
                  font-medium
                  transition
                "
              >
                <span className="text-xl font-bold">
                  G
                </span>

                Continue with Google
              </button>

              {/* Signup */}
              <p className="text-center text-slate-500 mt-8">
                Don't have an account?{" "}
                <button className="text-blue-500 hover:text-blue-400 font-medium">
                  Sign Up
                </button>
              </p>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


/* Feature Component */
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
    <div className="flex items-center gap-3">
      <div className="text-slate-300">
        {icon}
      </div>

      <div>
        <p className="font-semibold">
          {title}
        </p>

        <p className="text-xs text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}
