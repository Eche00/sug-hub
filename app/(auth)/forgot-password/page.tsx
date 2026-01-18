"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // API call to send reset password email
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const error = await response.json();
        setErrors({ submit: error.message || 'Failed to send reset email' });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    // Clear error when user starts typing
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email to receive reset instructions"
    >
      {submitted ? (
        // Success Message State
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800">Check your email</h3>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              We've sent password reset instructions to{' '}
              <span className="font-medium">{email}</span>
            </p>
            <p className="text-green-700 text-sm mt-2">
              Please check your inbox and follow the link to reset your password.
            </p>
          </div>
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>Didn't receive the email?</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setErrors({});
              }}
              className="text-green-800 hover:text-green-900 font-medium underline"
            >
              Try again
            </button>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <Link 
              href="/login" 
              className="text-green-800 hover:text-green-900 font-medium inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to login
            </Link>
          </div>
        </div>
      ) : (
        // Reset Form State
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <p className="text-gray-600 text-sm">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
          </div>

          <Input
            label="Email address"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            error={errors.email}
            placeholder="student@email.com"
            required
          />

          {errors.submit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errors.submit}</p>
            </div>
          )}

          <Button type="submit" fullWidth loading={loading}>
            Send reset instructions
          </Button>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Remember your password?{' '}
              <Link href="/login" className="text-green-800 hover:text-green-900 font-medium underline">
                Back to login
              </Link>
            </p>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;