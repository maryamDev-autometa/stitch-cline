import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'search';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, variant = 'default', className = '', ...props }, ref) => {
    const baseClasses = 'block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm';
    
    const variantClasses = {
      default: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500',
      search: 'rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary'
    };

    const inputClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {variant === 'search' && (
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
