'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import Input from '@/components/forms/Input';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password recovery requested for:', email);
    // Handle password recovery
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
              Reset your password
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <Button type="submit" fullWidth>
              Send Recovery Email
            </Button>

            <div className="text-center">
              <Link
                href="/"
                className="text-sm font-medium text-primary hover:text-primary/90"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
