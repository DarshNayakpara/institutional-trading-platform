export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-gray-400">
        Welcome to your Institutional Trading Platform.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <h3 className="text-gray-400 text-sm">S&P 500</h3>
          <p className="mt-2 text-3xl font-bold text-green-400">+1.28%</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <h3 className="text-gray-400 text-sm">NASDAQ</h3>
          <p className="mt-2 text-3xl font-bold text-red-400">-0.42%</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <h3 className="text-gray-400 text-sm">Gold</h3>
          <p className="mt-2 text-3xl font-bold">$3,352</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <h3 className="text-gray-400 text-sm">Bitcoin</h3>
          <p className="mt-2 text-3xl font-bold">$107,000</p>
        </div>
      </div>
    </div>
  );
}