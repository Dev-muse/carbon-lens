export interface Site {
  id: string;
  created_at: string;
  name: string;
  location: string;
  industry: 'Technology' | 'Manufacturing' | 'Logistics' | 'Retail';
}

export interface EmissionRecord {
  id: string;
  site_id: string;
  activity_type: 'Electricity' | 'Natural Gas' | 'Travel' | 'Waste';
  value: number;
  unit: string;
  carbon_impact: number;
  recorded_at: string;
}

// This matches the structure Supabase expects
export interface Database {
  public: {
    Tables: {
      sites: {
        Row: Site; // What comes OUT of the DB
        Insert: Omit<Site, 'id' | 'created_at'>; // What goes IN
        Update: Partial<Omit<Site, 'id' | 'created_at'>>; // What is UPDATED
      };
      emission_records: {
        Row: EmissionRecord;
        Insert: Omit<EmissionRecord, 'id' | 'created_at'>;
        Update: Partial<Omit<EmissionRecord, 'id' | 'created_at'>>;
      };
    };
  };
}