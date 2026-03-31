import { BarChart3, Leaf, LayoutDashboard, Settings, Factory } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { name: 'Facilities', icon: Factory, href: '#' },
  { name: 'Emissions', icon: BarChart3, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <Leaf className="text-emerald-400" size={32} />
        <span className="text-xl font-bold tracking-tight">CarbonLens</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
          System Status: Online
        </div>
      </div>
    </aside>
  );
}