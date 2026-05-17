import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium border',
  {
    variants: {
      tone: {
        default: 'border-default bg-elevated text-primary',
        free: 'border-default bg-elevated',
        arrival: 'border-default bg-elevated',
        required: 'border-default bg-elevated',
        blocked: 'border-default bg-elevated',
        home: 'border-default bg-elevated',
        unknown: 'border-default bg-elevated text-tertiary',
      },
    },
    defaultVariants: { tone: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}
