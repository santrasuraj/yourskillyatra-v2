'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      
      if (res.ok && data.success) {
        router.push('/admin');
        router.refresh(); // Refresh to ensure middleware catches the new state
      } else {
        setError(data.error || 'Invalid password');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-brand-orange/20 selection:text-brand-orange">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-[#FBBF24]"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-surface rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-brand-border">
            <Lock className="w-8 h-8 text-brand-orange" />
          </div>
          <h1 className="text-3xl font-extrabold text-brand-text file:tracking-tight mb-2">Admin Portal</h1>
          <p className="text-brand-secondary font-medium text-sm">Enter the master password to access the CMS.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-brand-text placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Master Password"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-brand-text placeholder:text-gray-400"
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-500 font-semibold">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Unlock Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
