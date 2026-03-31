export const CARBON_CONFIG = {
  name: 'CarbonLens',
  unit: 'kgCO2e', // Kilograms of CO2 equivalent
  currency: 'USD',
  categories: {
    scope1: { label: 'Direct Emissions', color: '#ef4444' },
    scope2: { label: 'Energy Indirect', color: '#f59e0b' },
    scope3: { label: 'Supply Chain', color: '#3b82f6' },
  },
};