type Props = {
  team1: string
  team2: string
  score1: number
  score2: number
  status: string
}

export default function MatchCard({
  team1,
  team2,
  score1,
  score2,
  status
}: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold">
        {team1} vs {team2}
      </h2>

      <p className="mt-2">
        {score1} / {score2}
      </p>

      <span className="text-sm text-gray-500">
        {status}
      </span>
    </div>
  )
}