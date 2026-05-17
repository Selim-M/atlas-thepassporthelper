import { Map as MapIcon } from 'lucide-react';

export function MapMode() {
  return (
    <>
      <aside className="border-r border-default bg-surface flex flex-col gap-4 p-4 h-full overflow-hidden">
        <header className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Passports</h2>
        </header>
        <p className="text-xs text-secondary">
          Phase 1 shell. Passport picker and access summary land in phase 4.
        </p>
      </aside>
      <main className="relative overflow-hidden border-l border-default grid place-items-center">
        <div className="text-center max-w-md px-6">
          <MapIcon className="h-12 w-12 mx-auto mb-4 text-tertiary" />
          <h3 className="text-base font-medium mb-2">Map canvas</h3>
          <p className="text-sm text-secondary">
            Maplibre + choropleth lands in phase 3.
          </p>
        </div>
      </main>
    </>
  );
}
