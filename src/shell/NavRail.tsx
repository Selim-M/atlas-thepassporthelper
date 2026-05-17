import {
  Compass,
  Map as MapIcon,
  Route,
  Plane,
  BedDouble,
  CalendarDays,
  Sun,
  Moon,
  Lock,
} from 'lucide-react';
import { useAppStore, type Mode, ENABLED_MODES } from '@/store/useAppStore';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface ModeDef {
  mode: Mode;
  label: string;
  Icon: typeof MapIcon;
}

const MODES: ModeDef[] = [
  { mode: 'map', label: 'Map', Icon: MapIcon },
  { mode: 'trips', label: 'Trips', Icon: Route },
  { mode: 'flights', label: 'Flights', Icon: Plane },
  { mode: 'stays', label: 'Stays', Icon: BedDouble },
  { mode: 'itinerary', label: 'Itinerary', Icon: CalendarDays },
];

export function NavRail() {
  const activeMode = useAppStore((s) => s.activeMode);
  const setActiveMode = useAppStore((s) => s.setActiveMode);
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  return (
    <nav
      aria-label="Primary"
      className="flex flex-col items-center gap-1 border-r border-default bg-surface py-3"
    >
      <div className="grid h-10 w-10 place-items-center text-primary">
        <Compass className="h-5 w-5" />
      </div>

      <div className="my-1 h-px w-8 bg-default" style={{ backgroundColor: 'var(--color-default)' }} />

      {MODES.map(({ mode, label, Icon }) => {
        const enabled = ENABLED_MODES.includes(mode);
        const active = activeMode === mode;
        return (
          <Tooltip key={mode}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label={label}
                aria-current={active ? 'page' : undefined}
                disabled={!enabled}
                onClick={() => enabled && setActiveMode(mode)}
                className={cn(
                  'group relative grid h-10 w-10 place-items-center rounded-md transition-colors',
                  active && 'bg-elevated text-primary ring-1 ring-[var(--color-strong)]',
                  !active && enabled && 'text-secondary hover:bg-hover hover:text-primary',
                  !enabled && 'text-tertiary opacity-40 cursor-not-allowed',
                )}
              >
                <Icon className="h-5 w-5" />
                {!enabled && (
                  <Lock className="absolute right-1 bottom-1 h-2.5 w-2.5 opacity-70" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {label}
              {!enabled && <span className="ml-1 text-tertiary">(v2)</span>}
            </TooltipContent>
          </Tooltip>
        );
      })}

      <div className="flex-1" />

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-md text-secondary hover:bg-hover hover:text-primary transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </TooltipContent>
      </Tooltip>

      <div className="mt-1 grid h-9 w-9 place-items-center rounded-full border border-default bg-elevated text-[11px] font-medium text-secondary">
        S
      </div>
    </nav>
  );
}
