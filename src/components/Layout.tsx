import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 italic">Welcome back, Admin</h1>
            <p className="text-slate-500 text-sm">Monitoring carbon impact across 4 facilities.</p>
          </div>
          <div className="flex gap-4">
            {/* We will add a User Profile/Logout button here later */}
            <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200" />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}