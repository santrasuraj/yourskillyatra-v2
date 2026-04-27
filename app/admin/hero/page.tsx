'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2 } from 'lucide-react';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';

export default function AdminHero() {
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
        setToast({ message: 'Hero section updated successfully!', type: 'success' });
      } else {
        throw new Error('Failed to save');
      }
    } catch (err) {
      setToast({ message: 'Error saving content.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-6 py-1"><div className="h-2 bg-slate-200 rounded"></div><div className="space-y-3"><div className="grid grid-cols-3 gap-4"><div className="h-2 bg-slate-200 rounded col-span-2"></div><div className="h-2 bg-slate-200 rounded col-span-1"></div></div><div className="h-2 bg-slate-200 rounded"></div></div></div></div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Edit Hero Section</h1>
        <p className="text-sm text-gray-500 font-medium mt-2">Update the main landing area of your website. HTML tags are allowed in the headline for gradient text.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-8">
        
        {/* Visibility */}
        <Toggle
          label="Enable Hero Section"
          description="Switch this off to hide the hero section from the live homepage."
          enabled={content.hero.enabled !== false}
          onChange={(enabled) => setContent({ ...content, hero: { ...content.hero, enabled } })}
        />

        {/* Main Text */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Main Content</h2>
          <div className="relative group">
            <label className="text-sm font-bold text-gray-700 mb-2 block">Headline (HTML Allowed)</label>
            <textarea
              required
              rows={3}
              value={content.hero.headline}
              onChange={(e) => setContent({ ...content, hero: { ...content.hero, headline: e.target.value } })}
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-gray-800"
            />
          </div>
          <div className="relative group">
            <label className="text-sm font-bold text-gray-700 mb-2 block">Sub-headline</label>
            <textarea
              required
              rows={3}
              value={content.hero.subheadline}
              onChange={(e) => setContent({ ...content, hero: { ...content.hero, subheadline: e.target.value } })}
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-gray-800"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Call to Action Button</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label className="text-sm font-bold text-gray-700 mb-2 block">Button Text</label>
              <input
                type="text"
                required
                value={content.hero.ctaText}
                onChange={(e) => setContent({ ...content, hero: { ...content.hero, ctaText: e.target.value } })}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-gray-800"
              />
            </div>
            <div className="relative group">
              <label className="text-sm font-bold text-gray-700 mb-2 block">Button Link</label>
              <input
                type="text"
                required
                value={content.hero.ctaLink}
                onChange={(e) => setContent({ ...content, hero: { ...content.hero, ctaLink: e.target.value } })}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all font-medium text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Floating Stat Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-700 uppercase tracking-widest text-xs mb-4">Stat Card 1 (Left)</h3>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block">Value (e.g. 24/7)</label>
                <input
                  type="text"
                  required
                  value={content.hero.stat1.value}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, stat1: { ...content.hero.stat1, value: e.target.value } } })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-orange outline-none font-bold text-gray-800"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block">Label (e.g. Mentorship)</label>
                <input
                  type="text"
                  required
                  value={content.hero.stat1.label}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, stat1: { ...content.hero.stat1, label: e.target.value } } })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-orange outline-none font-semibold text-gray-700 text-sm"
                />
              </div>
            </div>

            <div className="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-gray-700 uppercase tracking-widest text-xs mb-4">Stat Card 2 (Right)</h3>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block">Value (e.g. 100%)</label>
                <input
                  type="text"
                  required
                  value={content.hero.stat2.value}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, stat2: { ...content.hero.stat2, value: e.target.value } } })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-orange outline-none font-bold text-gray-800"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block">Label (e.g. Assured)</label>
                <input
                  type="text"
                  required
                  value={content.hero.stat2.label}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, stat2: { ...content.hero.stat2, label: e.target.value } } })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-orange outline-none font-semibold text-gray-700 text-sm"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={saving}
            className="w-full md:w-auto px-8 py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl shadow-brand-text/10"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Save Changes
          </button>
        </div>

      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
