'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, MessageCircleQuestion, Users, FileText, ArrowRight, Activity, Bell } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setStats({
          courses: data.courses?.items?.length || 0,
          faqs: data.faqs?.items?.length || 0,
          testimonials: data.testimonials?.items?.length || 0,
          blogPosts: data.blog?.items?.length || 0,
          mentors: data.mentors?.items?.length || 0,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const statCards = [
    { label: 'Active Courses', value: stats?.courses, icon: BookOpen, color: 'bg-blue-50 text-blue-600', href: '/admin/courses' },
    { label: 'Blog Posts', value: stats?.blogPosts, icon: FileText, color: 'bg-orange-50 text-brand-orange', href: '/admin/blog' },
    { label: 'FAQ Items', value: stats?.faqs, icon: MessageCircleQuestion, color: 'bg-emerald-50 text-emerald-600', href: '/admin/faqs' },
    { label: 'Success Stories', value: stats?.testimonials, icon: Users, color: 'bg-purple-50 text-purple-600', href: '/admin/testimonials' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome Back, Admin</h1>
          <p className="text-gray-500 font-medium text-sm mt-1">Manage your website content in real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Online
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 h-32"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, i) => (
            <Link 
              key={i} 
              href={stat.href}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500 font-medium text-sm mt-1">{stat.label}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <h2 className="text-xl font-bold text-gray-900 tracking-tight pt-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/hero" className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white group shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <Activity className="w-8 h-8 mb-4 text-brand-orange" />
          <h3 className="font-bold text-lg mb-2">Edit Hero Section</h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">Update the main headline, subtext, and call-to-action button of your landing page.</p>
        </Link>
        <Link href="/admin/blog" className="bg-white p-8 rounded-2xl border border-gray-200 group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <FileText className="w-8 h-8 mb-4 text-blue-600" />
          <h3 className="font-bold text-lg text-gray-900 mb-2">Write Blog Post</h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">Publish new insights and career tips to keep your audience engaged.</p>
        </Link>
        <Link href="/admin/settings" className="bg-white p-8 rounded-2xl border border-gray-200 group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <Bell className="w-8 h-8 mb-4 text-emerald-600" />
          <h3 className="font-bold text-lg text-gray-900 mb-2">Site Settings</h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">Update overall navigation links, footer details, and social media handles.</p>
        </Link>
      </div>

    </div>
  );
}
