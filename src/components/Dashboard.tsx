export default function Dashboard() {
  return (
    <div className="p-6">

      <h2 className="text-xl font-semibold mb-4">Home</h2>

      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white shadow p-4 rounded">
          <p className="text-gray-500">MY USERNAME</p>
          <h3 className="font-bold text-lg">Raju</h3>
          <small>SA5088</small>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <p className="text-gray-500">MY LEVEL</p>
          <h3 className="font-bold">Agent</h3>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <p className="text-gray-500">Current Balance</p>
          <h3 className="font-bold">1000</h3>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <p className="text-gray-500">Profit / Loss</p>
          <h3 className="text-green-500 font-bold">0</h3>
        </div>

      </div>

      <h3 className="mt-8 font-semibold text-lg">My Share and Company Share</h3>

      <div className="grid grid-cols-2 gap-4 mt-4">

        <div className="bg-white p-4 shadow rounded">
          Maximum My Match Share
          <h4 className="text-lg font-bold">0%</h4>
        </div>

        <div className="bg-gray-200 p-4 shadow rounded">
          Minimum Company Match Share
          <h4 className="text-lg font-bold">100%</h4>
        </div>

        <div className="bg-white p-4 shadow rounded">
          Maximum My Casino Share
          <h4 className="text-lg font-bold">0%</h4>
        </div>

        <div className="bg-gray-200 p-4 shadow rounded">
          Minimum Company Casino Share
          <h4 className="text-lg font-bold">100%</h4>
        </div>

      </div>

    </div>
  )
}