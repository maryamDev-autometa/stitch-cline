import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'win' | 'loss' | 'draw' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    win: 'bg-win/10 text-win',
    loss: 'bg-loss/10 text-loss',
    draw: 'bg-draw/10 text-draw',
    default: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-5 ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
