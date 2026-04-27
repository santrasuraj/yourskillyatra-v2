'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Inspect, BookOpen, MessageCircleQuestion, Target, 
  MessageSquare, Users, UserPlus, Image as ImageIcon, CheckSquare,
  LogOut, Settings, ExternalLink, Menu, X
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Hero Section', href: '/admin/hero', icon: Inspect },
  { name: 'Courses & Pricing', href: '/admin/courses', icon: BookOpen },
  { name: 'FAQs', href: '/admin/faqs', icon: MessageCircleQuestion },
  { name: 'Features', href: '/admin/features', icon: CheckSquare },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'Mentors', href: '/admin/mentors', icon: Users },
  { name: 'Target Audience', href: '/admin/audiences', icon: UserPlus },
  { name: 'Blog Posts', href: '/admin/blog', icon: ImageIcon },
  { name: 'Site Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are on the login page, don't show the sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex-shrink-0 border-r border-slate-800 flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800">
          <div className="font-bold text-white tracking-wide text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-black text-sm">Y</div>
            AdminPanel
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${isActive ? 'bg-brand-orange text-white' : 'hover:bg-slate-800 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon size={18} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-sm text-slate-400"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-40 sticky top-0">
          <button className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="flex-1"></div>

          <div className="flex items-center gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-lg transition-colors">
              <ExternalLink size={16} /> View Live Site
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        
      </div>
    </div>
  );
}
