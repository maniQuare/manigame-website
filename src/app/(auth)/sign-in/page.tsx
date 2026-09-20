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
  Home,
  Search,
  User,
  Menu,
  Bell,
  Shield,
  UserRound,
} from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loginType, setLoginType] = useState<"user" | "host">("user");

  return (
    <main className="min-h-screen bg-[#050a18] text-white overflow-hidden pb-16 md:pb-0">

      {/* ================= TOP APP BAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-slate-800/80 bg-[#070d1d]/95 backdrop-blur-xl">

        <div className="h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center">
              <Gamepad2
                size={23}
                className="text-blue-600"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Game<span className="text-blue-500">Types</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a
              href="#"
              className="hover:text-white transition"
            >
              PLAY
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              GAMES
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              HOST
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              COMMUNITY
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            <button
              className="
                hidden sm:flex
                w-10 h-10
                rounded-xl
                items-center justify-center
                text-slate-400
                hover:text-white
                hover:bg-slate-800
                transition
              "
            >
              <Search size={20} />
            </button>

            <button
              className="
                w-10 h-10
                rounded-xl
                flex items-center justify-center
                text-slate-400
                hover:text-white
                hover:bg-slate-800
                transition
              "
            >
              <Bell size={20} />
            </button>

            <button
              className="
                hidden sm:flex
                w-10 h-10
                rounded-xl
                items-center justify-center
                bg-blue-600
                hover:bg-blue-500
                transition
              "
            >
              <User size={19} />
            </button>

            <button className="md:hidden w-10 h-10 flex items-center justify-center text-slate-400">
              <Menu size={22} />
            </button>

          </div>
        </div>
      </header>


      {/* ================= MAIN ================= */}
      <div className="min-h-screen flex pt-16">

        {/* ================= LEFT SIDE - DESKTOP ================= */}
        <section className="relative hidden lg:flex lg:w-1/2 min-h-[calc(100vh-64px)] overflow-hidden">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/gaming-bg.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/95 via-[#07102a]/80 to-[#050a18]/95" />

          {/* Blue glow */}
          <div className="absolute w-[550px] h-[550px] bg-blue-600/20 blur-[150px] rounded-full -left-40 bottom-0" />

          {/* Content */}
          <div className="relative z-10 w-full p-10 xl:p-14 flex flex-col">

            <div className="flex-1 flex flex-col justify-center max-w-xl">

              <div className="mb-5 inline-flex items-center gap-2 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                GAME COMMUNITY
              </div>

              <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
                Welcome Back,
                <br />
                <span className="text-blue-500">
                  Gamer!
                </span>
              </h2>

              <p className="text-lg xl:text-xl text-slate-300 mt-6 leading-relaxed">
                Sign in to continue your game journey
                <br />
                and explore new challenges.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-8 mt-12">

                <Feature
                  icon={<Gamepad2 size={24} />}
                  title="Play"
                  text="Popular Games"
                />

                <Feature
                  icon={<Users size={24} />}
                  title="Connect"
                  text="With Friends"
                />

                <Feature
                  icon={<Trophy size={24} />}
                  title="Win"
                  text="Rewards"
                />

              </div>
            </div>

          </div>
        </section>


        {/* ================= RIGHT SIDE ================= */}
        <section className="w-full lg:w-1/2 min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">

          <div className="w-full max-w-[560px]">

            {/* Small app navigation */}
            <div className="hidden sm:flex items-center justify-between mb-5">

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Account
                </p>

                <p className="text-sm text-slate-300 mt-1">
                  Sign in to GameTypes
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Shield size={15} />
                Secure Login
              </div>

            </div>


            {/* ================= LOGIN CARD ================= */}
            <div
              className="
                rounded-2xl sm:rounded-3xl
                border border-slate-700/60
                bg-[#0c1426]/95
                backdrop-blur-xl
                p-5 sm:p-8 lg:p-10
                shadow-2xl
              "
            >

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Sign In
                </h2>

                <p className="text-sm sm:text-base text-slate-400 mt-2">
                  Choose how you want to access GameTypes
                </p>
              </div>


              {/* ================= USER / HOST ================= */}
              <div
                className="
                  grid grid-cols-2
                  mt-7 sm:mt-9
                  border border-slate-700
                  rounded-xl
                  p-1
                  bg-[#080f20]
                "
              >

                <button
                  type="button"
                  onClick={() => setLoginType("user")}
                  className={`
                    h-12 sm:h-14
                    rounded-lg
                    flex items-center justify-center
                    gap-2
                    font-semibold
                    transition-all
                    ${
                      loginType === "user"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "text-slate-500 hover:text-white"
                    }
                  `}
                >
                  <UserRound size={19} />
                  User
                </button>


                <button
                  type="button"
                  onClick={() => setLoginType("host")}
                  className={`
                    h-12 sm:h-14
                    rounded-lg
                    flex items-center justify-center
                    gap-2
                    font-semibold
                    transition-all
                    ${
                      loginType === "host"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "text-slate-500 hover:text-white"
                    }
                  `}
                >
                  <Shield size={19} />
                  Host
                </button>

              </div>


              {/* Selected type */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500" />

                Signing in as{" "}
                <span className="text-slate-300 font-medium">
                  {loginType === "user" ? "User" : "Host"}
                </span>
              </div>


              {/* ================= EMAIL ================= */}
              <div className="relative mt-6">

                <Mail
                  size={20}
                  className="
                    absolute left-4 sm:left-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="email"
                  placeholder={
                    loginType === "host"
                      ? "Host email address"
                      : "Email address"
                  }
                  className="
                    w-full
                    h-14 sm:h-16
                    rounded-xl
                    border border-slate-700
                    bg-[#080f20]
                    pl-12 sm:pl-14
                    pr-4
                    text-white
                    text-sm sm:text-base
                    outline-none
                    placeholder:text-slate-500
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                />

              </div>


              {/* ================= PASSWORD ================= */}
              <div className="relative mt-4">

                <Lock
                  size={20}
                  className="
                    absolute left-4 sm:left-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="
                    w-full
                    h-14 sm:h-16
                    rounded-xl
                    border border-slate-700
                    bg-[#080f20]
                    pl-12 sm:pl-14
                    pr-12
                    text-white
                    text-sm sm:text-base
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
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    hover:text-white
                  "
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>


              {/* ================= REMEMBER ================= */}
              <div className="flex items-center justify-between mt-5 text-xs sm:text-sm">

                <label className="flex items-center gap-2.5 text-slate-400 cursor-pointer">

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                    className="w-4 h-4 sm:w-5 sm:h-5 accent-blue-600"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Forgot password?
                </button>

              </div>


              {/* ================= SIGN IN ================= */}
              <button
                type="button"
                className="
                  group
                  w-full
                  h-14 sm:h-16
                  mt-7
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  active:scale-[0.99]
                  font-semibold
                  text-base sm:text-lg
                  flex items-center justify-center
                  gap-3
                  shadow-xl
                  shadow-blue-600/20
                  transition-all
                "
              >

                Sign In

                <ArrowRight
                  size={21}
                  className="
                    group-hover:translate-x-1
                    transition
                  "
                />

              </button>


              {/* ================= OR ================= */}
              <div className="flex items-center gap-4 my-7">

                <div className="h-px bg-slate-700 flex-1" />

                <span className="text-slate-500 text-xs">
                  OR
                </span>

                <div className="h-px bg-slate-700 flex-1" />

              </div>


              {/* ================= GOOGLE ================= */}
              <button
                type="button"
                className="
                  w-full
                  h-13 sm:h-14
                  py-3.5
                  rounded-xl
                  border border-slate-700
                  hover:bg-slate-800
                  flex items-center justify-center
                  gap-3
                  font-medium
                  text-sm sm:text-base
                  transition
                "
              >

                <span className="text-lg font-bold">
                  G
                </span>

                Continue with Google

              </button>


              {/* ================= SIGN UP ================= */}
              <p className="text-center text-xs sm:text-sm text-slate-500 mt-7">

                Don't have an account?{" "}

                <button
                  type="button"
                  className="
                    text-blue-500
                    hover:text-blue-400
                    font-medium
                  "
                >
                  Sign Up
                </button>

              </p>

            </div>

          </div>

        </section>

      </div>


      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav
        className="
          md:hidden
          fixed
          bottom-0
          left-0
          right-0
          z-50
          h-16
          border-t border-slate-800
          bg-[#070d1d]/95
          backdrop-blur-xl
        "
      >

        <div className="h-full grid grid-cols-4">

          <MobileNavItem
            icon={<Home size={20} />}
            label="Home"
            active
          />

          <MobileNavItem
            icon={<Search size={20} />}
            label="Explore"
          />

          <MobileNavItem
            icon={<Gamepad2 size={20} />}
            label="Games"
          />

          <MobileNavItem
            icon={<User size={20} />}
            label="Profile"
          />

        </div>

      </nav>

    </main>
  );
}


/* ================================================= */
/* FEATURE COMPONENT */
/* ================================================= */

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
        <p className="font-semibold text-sm">
          {title}
        </p>

        <p className="text-xs text-slate-400">
          {text}
        </p>
      </div>

    </div>
  );
}


/* ================================================= */
/* MOBILE NAV ITEM */
/* ================================================= */

function MobileNavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`
        flex flex-col
        items-center
        justify-center
        gap-1
        transition
        ${
          active
            ? "text-blue-500"
            : "text-slate-500 hover:text-slate-300"
        }
      `}
    >

      {icon}

      <span className="text-[10px] font-medium">
        {label}
      </span>

    </button>
  );
                }
