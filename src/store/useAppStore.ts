import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '@/lib/theme';

export type Mode = 'map' | 'trips' | 'flights' | 'stays' | 'itinerary';

export const ENABLED_MODES: Mode[] = ['map'];

interface AppState {
  // Mode
  activeMode: Mode;
  setActiveMode: (mode: Mode) => void;

  // Passports
  selectedPassports: string[];
  addPassport: (iso3: string) => void;
  removePassport: (iso3: string) => void;
  clearPassports: () => void;

  // Map selection
  hoveredCountry: string | null;
  selectedCountry: string | null;
  setHoveredCountry: (iso3: string | null) => void;
  setSelectedCountry: (iso3: string | null) => void;

  // Theme
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

interface PersistedAppState {
  selectedPassports: string[];
  theme: Theme;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      activeMode: 'map',
      setActiveMode: (mode) => {
        if (!ENABLED_MODES.includes(mode)) return;
        set({ activeMode: mode });
      },

      selectedPassports: [],
      addPassport: (iso3) => {
        const current = get().selectedPassports;
        if (current.includes(iso3)) return;
        set({ selectedPassports: [...current, iso3] });
      },
      removePassport: (iso3) => {
        set({ selectedPassports: get().selectedPassports.filter((p) => p !== iso3) });
      },
      clearPassports: () => set({ selectedPassports: [] }),

      hoveredCountry: null,
      selectedCountry: null,
      setHoveredCountry: (iso3) => set({ hoveredCountry: iso3 }),
      setSelectedCountry: (iso3) => set({ selectedCountry: iso3 }),

      theme: 'dark',
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'atlas-store',
      version: 1,
      partialize: (state): PersistedAppState => ({
        selectedPassports: state.selectedPassports,
        theme: state.theme,
      }),
      migrate: (persisted, fromVersion) => {
        if (fromVersion < 1) {
          return { selectedPassports: [], theme: 'dark' } as PersistedAppState;
        }
        return persisted as PersistedAppState;
      },
    },
  ),
);
