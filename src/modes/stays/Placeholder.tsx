import { BedDouble } from 'lucide-react';

export default function StaysPlaceholder() {
  return (
    <>
      <aside className="border-r border-default bg-surface p-4 flex flex-col gap-3">
        <h2 className="text-sm font-medium">Stays</h2>
        <p className="text-xs text-secondary">Coming in v2.</p>
      </aside>
      <main className="relative overflow-hidden border-l border-default grid place-items-center">
        <div className="text-center max-w-md px-6">
          <BedDouble className="h-12 w-12 mx-auto mb-4 text-tertiary" />
          <h3 className="text-base font-medium mb-2">Stays</h3>
          <p className="text-sm text-secondary">
            Track places you want to revisit and where you've already been.
          </p>
        </div>
      </main>
    </>
  );
}
