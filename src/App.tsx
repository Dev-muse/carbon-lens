import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { Layout } from "./components/Layout";

function App() {
  interface Site {
    id: number;
    name: string;
    industry: string;
    location: string;
  }
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    async function fetchSites() {
      const { data } = await supabase.from("sites").select("*");
      setSites(data || []);
    }
    fetchSites();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site) => (
          <div
            key={site.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-bold text-lg text-slate-800">{site.name}</h2>
              <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded uppercase">
                Active
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-2">{site.industry}</p>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
              <span>{site.location}</span>
              <span>Updated 2h ago</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
