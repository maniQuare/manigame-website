import { matches } from "@/data/matches"
import MatchCard from "@/components/MatchCard"

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        IPL Game Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map(match => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            score1={match.score1}
            score2={match.score2}
            status={match.status}
          />
        ))}
      </div>
    </main>
  )
}