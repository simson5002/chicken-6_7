import type { ReactNode } from 'react';

type BadgeVariant = 'gold' | 'spicy' | 'muted' | 'success' | 'dark';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  gold: 'bg-app-accent-bg text-chicken-golden border border-orange-200',
  spicy: 'bg-red-50 text-chicken-spicy border border-red-200',
  muted: 'bg-app-border text-app-text-muted border border-app-border',
  success: 'bg-green-50 text-green-600 border border-green-200',
  dark: 'bg-gray-900 text-white border border-gray-800',
};

export function Badge({ children, variant = 'muted', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

