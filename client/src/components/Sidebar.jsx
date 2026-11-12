import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Banknote,
  CreditCard,
  PiggyBank,
  PieChart,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Transactions", icon: ArrowLeftRight, active: false },
    { name: "Accounts", icon: Wallet, active: false },
    { name: "Payments", icon: Banknote, active: false },
    { name: "Cards", icon: CreditCard, active: false },
    { name: "Savings", icon: PiggyBank, active: false },
    { name: "Reports", icon: PieChart, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen p-4 flex flex-col justify-between">
      <div>
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2 px-3 py-4 mb-6">
          <div className="bg-emerald-500 text-slate-900 p-2 rounded-lg font-bold text-xl">
            PF
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            PAYEFLOW
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-emerald-500 text-slate-900 font-semibold"
                    : "hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="border-t border-slate-800 pt-4">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors">
          <LogOut />
          <span>Logout</span>
        </button>
        {/* <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors">
          <Wallet />
          <span>Accounts</span>
        </button> */}
      </div>
    </aside>
  );
}

export default Sidebar;
