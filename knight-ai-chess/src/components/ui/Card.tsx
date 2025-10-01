import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'player' | 'settings';
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  onClick 
}: CardProps) {
  const baseClasses = 'rounded-xl';
  
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-lg p-6',
    player: 'bg-background-light dark:bg-background-dark p-6 shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4',
    settings: 'flex items-center p-4 rounded-lg bg-white/5 transition-colors group'
  };
  
  const hoverClasses = hover ? 'hover:bg-accent/20 cursor-pointer' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
}
