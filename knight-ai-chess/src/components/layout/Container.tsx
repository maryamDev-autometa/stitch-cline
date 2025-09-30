import { ReactNode } from 'react';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: ReactNode;
}

export default function Container({ 
  size = 'lg', 
  className = '', 
  children 
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-md',      // 448px - Login/signup forms
    md: 'max-w-2xl',     // 672px - Settings page content
    lg: 'max-w-4xl',     // 896px - Game setup forms
    xl: 'max-w-7xl',     // 1280px - Main application pages
    full: 'max-w-full'   // Full width
  };

  const paddingClasses = 'mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className={`${sizeClasses[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}
