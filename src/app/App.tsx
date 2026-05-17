import { useEffect } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppShell } from '@/shell/AppShell';
import { useAppStore } from '@/store/useAppStore';
import { applyTheme } from '@/lib/theme';

export default function App() {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={300}>
      <AppShell />
    </TooltipProvider>
  );
}
