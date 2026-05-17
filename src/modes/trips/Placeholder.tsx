import { Route } from 'lucide-react';

export default function TripsPlaceholder() {
  return (
    <>
      <aside className="border-r border-default bg-surface p-4 flex flex-col gap-3">
        <h2 className="text-sm font-medium">Trips</h2>
        <p className="text-xs text-secondary">Coming in v2.</p>
      </aside>
      <main className="relative overflow-hidden border-l border-default grid place-items-center">
        <div className="text-center max-w-md px-6">
          <Route className="h-12 w-12 mx-auto mb-4 text-tertiary" />
          <h3 className="text-base font-medium mb-2">Trip planning</h3>
          <p className="text-sm text-secondary">
            Build itineraries, compare routes, save destinations from the map.
          </p>
        </div>
      </main>
    </>
  );
}
