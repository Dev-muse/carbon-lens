import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { Layout } from "./components/Layout";
import { Activity, Globe, Zap } from "lucide-react";
import type { Site } from "./types/database";

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
};

function App() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSites() {
      const { data, error } = await supabase.from("sites").select("*");

      if (!error && data) setSites(data || []);
      setLoading(false);
    }
    fetchSites();
  }, []);

  return (
    <Layout>
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Sites"
          value={sites.length.toString()}
          icon={<Globe size={20} />}
          color="text-blue-600"
        />
        <StatCard
          title="Live Intensity"
          value="245 g/kWh"
          icon={<Zap size={20} />}
          color="text-amber-600"
          subtitle="UK Grid Average"
        />
        <StatCard
          title="Avg. Reliability"
          value="99.2%"
          icon={<Activity size={20} />}
          color="text-emerald-600"
        />
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-4">
        Facility Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site) => (
          <div
            key={site.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg text-slate-800">{site.name}</h3>
              <span
                className={`px-2 py-1 text-xs font-bold rounded uppercase ${
                  site.industry === "Technology"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {site.industry}
              </span>
            </div>
            <p className="text-slate-500 text-sm">{site.location}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// A small reusable component for our top stats
function StatCard({ title, value, icon, color, subtitle }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className={`${color}`}>{icon}</div>
        <span className="text-sm font-medium text-slate-500">{title}</span>
      </div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
    </div>
  );
}

export default App;
