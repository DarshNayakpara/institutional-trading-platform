import { Bell, Search, UserCircle } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search markets..."
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-72 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="text-gray-400 hover:text-white transition">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <UserCircle className="text-gray-300" size={30} />
          <div className="text-right">
            <p className="text-white text-sm font-medium">Darsh</p>
            <p className="text-xs text-gray-400">Trader</p>
          </div>
        </div>
      </div>
    </header>
  );
}