'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, Plus, Trash2 } from 'lucide-react';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';

export default function AdminSettings() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setToast({ message: 'Site settings updated safely!', type: 'success' });
      } else throw new Error();
    } catch (err) {
      setToast({ message: 'Error saving settings.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-6 py-1"><div className="h-[500px] bg-gray-200 rounded-3xl"></div></div></div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Global Site Settings</h1>
        <p className="text-sm text-gray-500 font-medium mt-2">Manage your navbar links, footer content, and contact details from one place.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-12">
        
        {/* Footer Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold text-gray-900">Footer Content</h2>
            <div className="scale-75 origin-right">
              <Toggle 
                label="Enabled" 
                enabled={content.footer.enabled !== false} 
                onChange={v => setContent({...content, footer: {...content.footer, enabled: v}})} 
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Footer Tagline</label>
              <textarea
                required
                rows={2}
                value={content.footer.tagline}
                onChange={e => setContent({...content, footer: {...content.footer, tagline: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Massive CTA Headline (HTML Allowed)</label>
              <textarea
                required
                rows={2}
                value={content.footer.ctaHeadline}
                onChange={e => setContent({...content, footer: {...content.footer, ctaHeadline: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Support Phone Number</label>
              <input
                required
                type="text"
                value={content.footer.contact.phone}
                onChange={e => setContent({...content, footer: {...content.footer, contact: {...content.footer.contact, phone: e.target.value}}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Support Email Address</label>
              <input
                required
                type="email"
                value={content.footer.contact.email}
                onChange={e => setContent({...content, footer: {...content.footer, contact: {...content.footer.contact, email: e.target.value}}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold text-gray-900">About Us (Homepage Teaser)</h2>
            <div className="scale-75 origin-right">
              <Toggle 
                label="Enabled" 
                enabled={content.aboutHome.enabled !== false} 
                onChange={v => setContent({...content, aboutHome: {...content.aboutHome, enabled: v}})} 
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Headline (HTML Allowed)</label>
              <input
                required
                type="text"
                value={content.aboutHome.title}
                onChange={e => setContent({...content, aboutHome: {...content.aboutHome, title: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Description</label>
              <textarea
                required
                rows={4}
                value={content.aboutHome.description}
                onChange={e => setContent({...content, aboutHome: {...content.aboutHome, description: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">CTA Button Text</label>
              <input
                required
                type="text"
                value={content.aboutHome.ctaText}
                onChange={e => setContent({...content, aboutHome: {...content.aboutHome, ctaText: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">CTA Link</label>
              <input
                required
                type="text"
                value={content.aboutHome.ctaLink}
                onChange={e => setContent({...content, aboutHome: {...content.aboutHome, ctaLink: e.target.value}})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none font-medium text-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Navbar Links */}
        <section className="space-y-6 pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold text-gray-900">Navbar Links</h2>
            <div className="scale-75 origin-right">
              <Toggle 
                label="Enabled" 
                enabled={content.navbar.enabled !== false} 
                onChange={v => setContent({...content, navbar: {...content.navbar, enabled: v}})} 
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Display Label</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">URL Route</span>
            </div>
            {content.navbar.links.map((link: any, i: number) => (
              <div key={i} className="flex gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                <input
                  required
                  type="text"
                  value={link.label}
                  onChange={e => {
                    const newLinks = [...content.navbar.links];
                    newLinks[i].label = e.target.value;
                    setContent({...content, navbar: {...content.navbar, links: newLinks}});
                  }}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                />
                <input
                  required
                  type="text"
                  value={link.href}
                  onChange={e => {
                    const newLinks = [...content.navbar.links];
                    newLinks[i].href = e.target.value;
                    setContent({...content, navbar: {...content.navbar, links: newLinks}});
                  }}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newLinks = [...content.navbar.links];
                    newLinks.splice(i, 1);
                    setContent({...content, navbar: {...content.navbar, links: newLinks}});
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              const newLinks = [...content.navbar.links, { label: '', href: '/' }];
              setContent({...content, navbar: {...content.navbar, links: newLinks}});
            }}
            className="inline-flex gap-2 items-center text-sm font-bold text-brand-orange bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-lg transition-colors border border-orange-100"
          >
            <Plus size={16} /> Add Link Item
          </button>
        </section>

        <div className="pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={saving}
            className="w-full md:w-auto px-8 py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl shadow-brand-text/10"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Save Settings
          </button>
        </div>

      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
