import { NavRail } from './NavRail';
import { ModePanel } from './ModePanel';

export function AppShell() {
  return (
    <div className="h-screen w-screen grid grid-cols-[56px_300px_1fr] bg-base text-primary overflow-hidden">
      <NavRail />
      <ModePanel />
    </div>
  );
}
