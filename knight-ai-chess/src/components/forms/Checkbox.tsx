'use client';

import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'small' | 'large';
  className?: string;
}

export default function Checkbox({
  id,
  name,
  label,
  checked,
  onChange,
  size = 'small',
  className = ''
}: CheckboxProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    large: 'h-5 w-5'
  };

  return (
    <label className={`flex items-center gap-x-3 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={`${sizeClasses[size]} rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary focus:ring-primary/50 form-checkbox transition-colors`}
      />
      <span className="text-base text-gray-700 dark:text-gray-300 select-none">
        {label}
      </span>
    </label>
  );
}
