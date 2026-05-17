export type Theme = 'dark' | 'light';

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.dataset.theme = theme;
}

export const STATUS_COLOR: Record<string, string> = {
  free: 'var(--color-status-free)',
  arrival: 'var(--color-status-arrival)',
  required: 'var(--color-status-required)',
  blocked: 'var(--color-status-blocked)',
  home: 'var(--color-status-home)',
};
