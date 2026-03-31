import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

interface Site {
  id: string
  name: string
  location: string
  industry: string
}

function App() {
  const [sites, setSites] = useState<Site[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSites() {
      const { data, error } = await supabase
        .from('sites')
        .select('*')
      
      if (error) console.error('Error fetching:', error)
      else setSites(data || [])
      setLoading(false)
    }

    fetchSites()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">CarbonLens Dashboard</h1>
      
      {loading ? (
        <p>Connecting to database...</p>
      ) : (
        <div className="grid gap-4">
          {sites.map(site => (
            <div key={site.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="font-semibold text-xl">{site.name}</h2>
              <p className="text-gray-500">{site.location} • {site.industry}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App