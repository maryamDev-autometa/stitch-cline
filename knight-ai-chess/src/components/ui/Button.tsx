import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon' | 'destructive' | 'pagination';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  
  const variantClasses = {
    primary: 'border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 focus:ring-primary/50 dark:focus:ring-offset-background-dark',
    secondary: 'rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors',
    icon: 'rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors',
    destructive: 'rounded-lg bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600/30 transition-colors',
    pagination: 'rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200 hover:bg-gray-200/40 dark:hover:bg-gray-800/40 transition-colors'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-6 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  const iconPadding = variant === 'icon' ? 'p-2' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${variant !== 'icon' ? sizeClasses[size] : iconPadding}
    ${widthClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={variant === 'destructive' ? 'mr-2' : ''}>{icon}</span>}
      {children}
    </button>
  );
}
