'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import Input from '@/components/forms/Input';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Chess Pattern Background */}
      <div className="hidden lg:flex w-1/2 bg-background-dark chess-pattern items-center justify-center p-12">
        {/* Decorative panel - empty as in original */}
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <Logo 
              className="h-10 w-10 text-white" 
              showText={true} 
              textClassName="text-4xl font-bold text-gray-900 dark:text-white" 
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Or{' '}
              <Link
                href="/authentication/login"
                className="font-medium text-primary hover:text-primary/90"
              >
                Login to existing account
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              autoComplete="username"
            />

            <Input
              label="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete="new-password"
            />

            <Button type="submit" fullWidth>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
