import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Activity,
  Globe2,
  Database,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: TrendingUp, label: "Markets" },
  { icon: BarChart3, label: "Scorecards" },
  { icon: Activity, label: "GEX" },
  { icon: Database, label: "COT" },
  { icon: Globe2, label: "Economics" },
  { icon: Activity, label: "MT5" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">
          Institutional
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}