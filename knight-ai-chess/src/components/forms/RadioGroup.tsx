'use client';

import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  layout?: 'grid' | 'flex';
  columns?: number;
  className?: string;
}

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
  label,
  layout = 'grid',
  columns = 3,
  className = ''
}: RadioGroupProps) {
  const containerClasses = layout === 'grid' 
    ? `grid gap-3 grid-cols-${columns}`
    : 'flex gap-3 flex-wrap';

  return (
    <fieldset className={className}>
      {label && (
        <legend className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
          {label}
        </legend>
      )}
      <div className={containerClasses}>
        {options.map((option) => (
          <label
            key={option.value}
            className="relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:ring-primary has-[:checked]:bg-primary/10 has-[:checked]:ring-2 transition-all"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <span className="font-medium text-sm text-gray-900 dark:text-white">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
