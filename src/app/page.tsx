"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  Search,
  Bell,
  User,
  Menu,
  X,
  Trophy,
  Users,
  ChevronRight,
  Play,
  Shield,
  Headphones,
  Star,
  Zap,
  Home,
  Swords,
  MessageCircle,
  Settings,
  LogOut,
  Crown,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface Game {
  title: string;
  category: string;
  players: string;
  image: string;
}

interface Player {
  name: string;
  role: string;
  status: "Online" | "Offline";
  image: string;
}

/* =========================================================
   DATA
========================================================= */

const games: Game[] = [
  {
    title: "Valorant",
    category: "FPS",
    players: "245K+",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80",
  },
  {
    title: "BGMI",
    category: "Battle Royale",
    players: "189K+",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=900&q=80",
  },
  {
    title: "Fortnite",
    category: "Battle Royale",
    players: "320K+",
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=900&q=80",
  },
  {
    title: "Minecraft",
    category: "Sandbox",
    players: "175K+",
    image:
      "https://images.unsplash.com/photo-1587573089734-59952b581b0f?w=900&q=80",
  },
  {
    title: "GTA V",
    category: "Action",
    players: "210K+",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80",
  },
  {
    title: "Call of Duty",
    category: "FPS",
    players: "142K+",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=900&q=80",
  },
];

const players: Player[] = [
  {
    name: "ShadowGamer",
    role: "Pro Player",
    status: "Online",
    image:
      "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "RiyaPlayz",
    role: "Streamer",
    status: "Online",
    image:
      "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "XxDarkSoulxX",
    role: "Top 100",
    status: "Online",
    image:
      "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "GamingQueen",
    role: "Creator",
    status: "Offline",
    image:
      "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Devil_Zone",
    role: "Pro Player",
    status: "Online",
    image:
      "https://i.pravatar.cc/150?img=14",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function GameDashboard() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#050b12] text-white">

      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[240px] border-r border-slate-800/80 bg-[#071018] flex-col z-50">

        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-slate-800/70">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">

          <SidebarItem
            icon={<Home size={19} />}
            label="Dashboard"
            active
          />

          <SidebarItem
            icon={<Gamepad2 size={19} />}
            label="Games"
          />

          <SidebarItem
            icon={<Trophy size={19} />}
            label="Tournaments"
          />

          <SidebarItem
            icon={<Users size={19} />}
            label="Community"
          />

          <SidebarItem
            icon={<MessageCircle size={19} />}
            label="Messages"
          />

          <div className="pt-6 pb-2 px-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
              Account
            </span>
          </div>

          <SidebarItem
            icon={<User size={19} />}
            label="Profile"
          />

          <SidebarItem
            icon={<Settings size={19} />}
            label="Settings"
          />
        </nav>

        {/* User */}
        <div className="p-4 border-t border-slate-800/70">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1722]">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold truncate">
                ShadowGamer
              </p>

              <p className="text-xs text-slate-500">
                Pro Player
              </p>
            </div>

            <button className="text-slate-500 hover:text-white">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          <div
            onClick={() => setMobileMenu(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <aside className="relative w-[280px] h-full bg-[#071018] border-r border-slate-800 p-5">

            <div className="flex items-center justify-between mb-8">
              <Logo />

              <button
                onClick={() => setMobileMenu(false)}
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">

              <MobileMenuItem
                icon={<Home size={19} />}
                label="Dashboard"
              />

              <MobileMenuItem
                icon={<Gamepad2 size={19} />}
                label="Games"
              />

              <MobileMenuItem
                icon={<Trophy size={19} />}
                label="Tournaments"
              />

              <MobileMenuItem
                icon={<Users size={19} />}
                label="Community"
              />

              <MobileMenuItem
                icon={<MessageCircle size={19} />}
                label="Messages"
              />

              <MobileMenuItem
                icon={<User size={19} />}
                label="Profile"
              />

              <MobileMenuItem
                icon={<Settings size={19} />}
                label="Settings"
              />
            </nav>
          </aside>
        </div>
      )}

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="lg:ml-[240px]">

        {/* ===================================================
            TOP NAVBAR
        =================================================== */}

        <header className="sticky top-0 z-40 h-[70px] border-b border-slate-800/80 bg-[#050b12]/90 backdrop-blur-xl">

          <div className="h-full px-4 sm:px-6 xl:px-8 flex items-center gap-4">

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden w-10 h-10 rounded-xl bg-[#0b1722] flex items-center justify-center"
            >
              <Menu size={20} />
            </button>

            {/* Mobile logo */}
            <div className="lg:hidden">
              <Logo />
            </div>

            {/* Search */}
            <div className="hidden sm:flex relative flex-1 max-w-[520px]">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search games, players or tournaments..."
                className="
                  w-full
                  h-11
                  rounded-xl
                  bg-[#0a1520]
                  border border-slate-800
                  pl-11 pr-4
                  text-sm
                  outline-none
                  placeholder:text-slate-600
                  focus:border-cyan-500/60
                "
              />
            </div>

            <div className="ml-auto flex items-center gap-2">

              <button className="sm:hidden w-10 h-10 rounded-xl bg-[#0b1722] flex items-center justify-center text-slate-400">
                <Search size={19} />
              </button>

              <button className="relative w-10 h-10 rounded-xl bg-[#0b1722] flex items-center justify-center text-slate-400 hover:text-white">
                <Bell size={19} />

                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
              </button>

              <button className="hidden sm:flex items-center gap-2 pl-2">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  className="w-9 h-9 rounded-full"
                  alt="Profile"
                />

                <div className="hidden xl:block text-left">
                  <p className="text-sm font-medium">
                    ShadowGamer
                  </p>

                  <p className="text-[10px] text-cyan-400">
                    ONLINE
                  </p>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="p-4 sm:p-6 xl:p-8 space-y-8">

          {/* =================================================
              HERO
          ================================================= */}

          <section
            className="
              relative
              min-h-[420px]
              sm:min-h-[450px]
              rounded-2xl
              overflow-hidden
              border border-slate-800
            "
          >

            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1800&q=90')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03070b] via-[#03070b]/85 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#03070b] via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 min-h-[420px] sm:min-h-[450px] flex items-center">

              <div className="p-6 sm:p-10 lg:p-14 max-w-[650px]">

                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 text-xs text-cyan-300 font-medium mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  PLAY • COMPETE • CONNECT
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
                  Your Game.
                  <br />
                  <span className="text-cyan-400">
                    Your World.
                  </span>
                </h1>

                <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-[500px]">
                  Join GameTypes — the ultimate gaming
                  platform where players, creators and
                  hosts come together to play, compete
                  and build their community.
                </p>

                <div className="flex flex-wrap gap-3 mt-7">

                  <button className="
                    h-12 px-6
                    rounded-xl
                    bg-cyan-400
                    hover:bg-cyan-300
                    text-black
                    font-bold
                    text-sm
                    flex items-center gap-2
                    transition
                  ">
                    Start Playing
                    <ChevronRight size={17} />
                  </button>

                  <button className="
                    h-12 px-6
                    rounded-xl
                    border border-cyan-400/60
                    bg-black/20
                    hover:bg-cyan-400/10
                    text-white
                    font-semibold
                    text-sm
                    flex items-center gap-2
                  ">
                    <Play size={16} />
                    Explore Games
                  </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 sm:gap-10 mt-9">

                  <HeroStat
                    icon={<Users size={20} />}
                    number="1M+"
                    label="Active Players"
                  />

                  <HeroStat
                    icon={<Gamepad2 size={20} />}
                    number="500+"
                    label="Games"
                  />

                  <HeroStat
                    icon={<Trophy size={20} />}
                    number="100+"
                    label="Tournaments"
                  />

                </div>
              </div>
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="w-7 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-2 h-1.5 rounded-full bg-white/40" />
              <span className="w-2 h-1.5 rounded-full bg-white/40" />
            </div>
          </section>

          {/* =================================================
              POPULAR GAMES
          ================================================= */}

          <section>

            <SectionHeader
              icon={<Gamepad2 size={23} />}
              title="Popular Games"
              description="Discover and play the most loved games on GameTypes."
            />

            <div className="
              grid
              grid-cols-2
              md:grid-cols-3
              xl:grid-cols-6
              gap-3
              sm:gap-4
            ">

              {games.map((game) => (
                <GameCard
                  key={game.title}
                  game={game}
                />
              ))}

            </div>
          </section>

          {/* =================================================
              TOURNAMENT + BENEFITS
          ================================================= */}

          <section className="grid xl:grid-cols-2 gap-5">

            {/* Tournament */}
            <div
              className="
                relative
                min-h-[260px]
                rounded-2xl
                overflow-hidden
                border border-cyan-500/30
                bg-[#0a141f]
              "
            >

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1200&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071018] via-[#071018]/80 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 max-w-[430px]">

                <div className="w-11 h-11 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-5">
                  <Trophy size={23} />
                </div>

                <h3 className="text-2xl font-bold">
                  Join Tournaments
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Compete in exciting tournaments
                  and win amazing rewards.
                </p>

                <button className="
                  mt-6
                  h-11 px-5
                  rounded-xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  text-sm
                  flex items-center gap-2
                ">
                  View Tournaments
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

            {/* Why choose */}
            <div className="rounded-2xl border border-slate-800 bg-[#09131e] p-6 sm:p-8">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Star size={20} />
                </div>

                <h3 className="text-xl font-bold">
                  Why Choose GameTypes?
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                <Benefit
                  icon={<Shield />}
                  title="Secure & Fair Play"
                  text="Play with confidence. Our platform is safe and trusted."
                />

                <Benefit
                  icon={<Users />}
                  title="Global Community"
                  text="Meet gamers from around the world."
                />

                <Benefit
                  icon={<Headphones />}
                  title="24/7 Support"
                  text="We're always here to help you."
                />

                <Benefit
                  icon={<Trophy />}
                  title="Exciting Rewards"
                  text="Win prizes, skins and exclusive perks."
                />

              </div>
            </div>
          </section>

          {/* =================================================
              COMMUNITY
          ================================================= */}

          <section>

            <SectionHeader
              icon={<Users size={23} />}
              title="Featured Community"
              description="Meet, chat and play with amazing gamers."
            />

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
              gap-3
            ">

              {players.map((player) => (
                <PlayerCard
                  key={player.name}
                  player={player}
                />
              ))}

            </div>
          </section>

        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="border-t border-slate-800 bg-[#040a10] mt-4">

          <div className="p-6 sm:p-8 xl:p-10">

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
              max-w-[1500px]
              mx-auto
            ">

              {/* Brand */}
              <div>

                <Logo />

                <p className="text-sm text-slate-500 mt-4 max-w-[250px]">
                  Play. Compete. Connect.
                  Your gaming world starts here.
                </p>

              </div>

              {/* Links */}
              <FooterColumn
                title="Quick Links"
                links={[
                  "Home",
                  "Games",
                  "Tournaments",
                  "Community",
                  "Host",
                ]}
              />

              <FooterColumn
                title="Support"
                links={[
                  "Help Center",
                  "Terms of Service",
                  "Privacy Policy",
                  "Contact Us",
                ]}
              />

              {/* Newsletter */}
              <div>

                <h4 className="font-semibold mb-3">
                  Subscribe
                </h4>

                <p className="text-xs text-slate-500 mb-4">
                  Get the latest news, updates and events.
                </p>

                <div className="flex">

                  <input
                    type="email"
                    placeholder="Your email"
                    className="
                      min-w-0
                      flex-1
                      h-10
                      rounded-l-lg
                      border border-slate-700
                      bg-[#09131e]
                      px-3
                      text-xs
                      outline-none
                    "
                  />

                  <button className="
                    h-10
                    px-4
                    rounded-r-lg
                    bg-cyan-400
                    text-black
                    font-semibold
                    text-xs
                  ">
                    Subscribe
                  </button>

                </div>
              </div>

            </div>

            <div className="max-w-[1500px] mx-auto border-t border-slate-800 mt-8 pt-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-slate-600">

              <span>
                © 2026 GameTypes. All rights reserved.
              </span>

              <span>
                More Games. More Friends. More Fun.
              </span>

            </div>

          </div>
        </footer>
      </div>

      {/* =====================================================
          MOBILE BOTTOM NAV
      ===================================================== */}

      <nav className="
        lg:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-50
        h-[68px]
        border-t border-slate-800
        bg-[#071018]/95
        backdrop-blur-xl
        grid grid-cols-5
      ">

        <BottomNavItem
          icon={<Home size={20} />}
          label="Home"
          active
        />

        <BottomNavItem
          icon={<Gamepad2 size={20} />}
          label="Games"
        />

        <BottomNavItem
          icon={<Swords size={20} />}
          label="Battle"
        />

        <BottomNavItem
          icon={<Users size={20} />}
          label="Community"
        />

        <BottomNavItem
          icon={<User size={20} />}
          label="Profile"
        />

      </nav>

    </main>
  );
}

/* =========================================================
   LOGO
========================================================= */

function Logo() {
  return (
    <div className="flex items-center gap-2.5">

      <div className="
        w-9 h-9
        rounded-xl
        bg-white
        flex items-center justify-center
      ">
        <Gamepad2
          size={22}
          className="text-cyan-500"
        />
      </div>

      <span className="text-xl font-bold tracking-tight">
        Game<span className="text-cyan-400">Types</span>
      </span>

    </div>
  );
}

/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({
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
      className={`
        w-full
        h-11
        rounded-xl
        flex
        items-center
        gap-3
        px-4
        text-sm
        transition
        ${
          active
            ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/10"
            : "text-slate-500 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

/* =========================================================
   MOBILE MENU ITEM
========================================================= */

function MobileMenuItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="
      w-full
      h-12
      rounded-xl
      flex items-center gap-3
      px-4
      text-slate-400
      hover:text-white
      hover:bg-white/5
      transition
    ">
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">

      <div className="text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="font-bold text-sm">
          {number}
        </p>

        <p className="text-[10px] text-slate-500">
          {label}
        </p>
      </div>

    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-end justify-between mb-5">

      <div>

        <div className="flex items-center gap-3">

          <div className="text-cyan-400">
            {icon}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            {title}
          </h2>

        </div>

        <p className="text-xs sm:text-sm text-slate-500 mt-1 ml-9">
          {description}
        </p>

      </div>

      <button className="
        hidden sm:flex
        items-center gap-1
        text-xs
        text-cyan-400
        hover:text-cyan-300
      ">
        View All
        <ChevronRight size={15} />
      </button>

    </div>
  );
}

/* =========================================================
   GAME CARD
========================================================= */

function GameCard({
  game,
}: {
  game: Game;
}) {
  return (
    <button className="
      group
      text-left
      rounded-xl
      overflow-hidden
      border border-slate-800
      bg-[#09131e]
      hover:border-cyan-500/40
      hover:-translate-y-1
      transition-all
    ">

      <div className="relative aspect-[1.45] overflow-hidden">

        <img
          src={game.image}
          alt={game.title}
          className="
            w-full h-full
            object-cover
            group-hover:scale-105
            transition duration-500
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="
          absolute
          bottom-2
          left-2
          right-2
          flex
          justify-between
          items-center
        ">

          <span className="text-xs text-white font-medium">
            {game.title}
          </span>

          <Play
            size={13}
            className="text-cyan-400"
          />

        </div>

      </div>

      <div className="p-3">

        <p className="text-[10px] text-slate-500">
          {game.category}
        </p>

        <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-500">
          <Users size={11} />
          {game.players}
        </div>

      </div>
    </button>
  );
}

/* =========================================================
   BENEFIT
========================================================= */

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="
        shrink-0
        w-10 h-10
        rounded-xl
        bg-cyan-400/10
        text-cyan-400
        flex items-center justify-center
      ">
        {React.cloneElement(
          icon as React.ReactElement,
          { size: 18 }
        )}
      </div>

      <div>

        <h4 className="text-sm font-semibold">
          {title}
        </h4>

        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   PLAYER CARD
========================================================= */

function PlayerCard({
  player,
}: {
  player: Player;
}) {
  return (
    <button className="
      flex items-center
      gap-3
      p-3
      rounded-xl
      border border-slate-800
      bg-[#09131e]
      hover:border-cyan-500/30
      transition
      text-left
    ">

      <div className="relative">

        <img
          src={player.image}
          alt={player.name}
          className="w-11 h-11 rounded-full object-cover"
        />

        <span
          className={`
            absolute
            right-0
            bottom-0
            w-3
            h-3
            rounded-full
            border-2
            border-[#09131e]
            ${
              player.status === "Online"
                ? "bg-emerald-400"
                : "bg-slate-600"
            }
          `}
        />

      </div>

      <div className="min-w-0">

        <p className="text-sm font-semibold truncate">
          {player.name}
        </p>

        <p className="text-[10px] text-slate-500 mt-0.5">
          {player.role}
        </p>

        <p
          className={`
            text-[9px] mt-1
            ${
              player.status === "Online"
                ? "text-emerald-400"
                : "text-slate-600"
            }
          `}
        >
          ● {player.status}
        </p>

      </div>

    </button>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>

      <h4 className="font-semibold mb-4">
        {title}
      </h4>

      <div className="space-y-2">

        {links.map((link) => (
          <button
            key={link}
            className="
              block
              text-sm
              text-slate-500
              hover:text-cyan-400
              transition
            "
          >
            {link}
          </button>
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   MOBILE BOTTOM NAV
========================================================= */

function BottomNavItem({
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
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-1
        text-[10px]
        ${
          active
            ? "text-cyan-400"
            : "text-slate-500"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
