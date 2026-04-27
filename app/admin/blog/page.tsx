'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save } from 'lucide-react';

export default function AdminBlog() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/api/content');
    const data = await res.json();
    setContent(data);
    setLoading(false);
  };

  const handleSave = async (newContent: any) => {
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent),
      });
      if (res.ok) {
        setContent(newContent);
        setToast({ message: 'Saved successfully!', type: 'success' });
        setIsModalOpen(false);
      } else throw new Error();
    } catch (e) {
      setToast({ message: 'Error saving content.', type: 'error' });
    }
  };

  const handleAdd = () => {
    setEditingIndex(null);
    setFormData({ 
      slug: '', title: '', category: 'Career Tips', readTime: '5 min read', 
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
      excerpt: '', content: '' 
    });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row)));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newList = [...content.blog.items];
    newList.splice(index, 1);
    handleSave({ ...content, blog: { ...content.blog, items: newList } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = [...content.blog.items];
    if (editingIndex !== null) {
      newList[editingIndex] = formData;
    } else {
      newList.push(formData);
    }
    handleSave({ ...content, blog: { ...content.blog, items: newList } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'title', label: 'Article Title', render: (val: string) => <div className="font-bold text-gray-900 max-w-xs">{val}</div> },
    { key: 'category', label: 'Category', render: (val: string) => <div className="text-brand-orange bg-orange-50 px-2 py-1 rounded inline-block text-xs font-bold">{val}</div> },
    { key: 'date', label: 'Date Published', render: (val: string) => <div className="text-gray-500 font-medium whitespace-nowrap">{val}</div> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Blog Section"
          description="Toggle the visibility of the articles and insights on the site."
          enabled={content.blog.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, blog: { ...content.blog, enabled } })}
        />
      </div>

      <AdminTable 
        title="Blog Articles"
        description="Manage the articles and insights published on your blog."
        columns={columns}
        data={content.blog.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Blog Post' : 'Write New Article'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Title</label>
              <input required type="text" value={formData?.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">URL Slug (e.g. interview-tips)</label>
              <input required type="text" value={formData?.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Category</label>
              <input required type="text" value={formData?.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Read Time</label>
              <input required type="text" value={formData?.readTime} onChange={e => setFormData({...formData, readTime: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Date (e.g. Apr 12, 2026)</label>
              <input required type="text" value={formData?.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Short Excerpt (Intro paragraph)</label>
            <textarea required rows={3} value={formData?.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 leading-relaxed text-sm" />
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2 flex items-center justify-between">
              Full Markdown Content
              <span className="font-normal text-xs text-gray-400">Supports basic markdown (*bold*, **headers**)</span>
            </label>
            <textarea required rows={12} value={formData?.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full p-5 rounded-xl border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 leading-relaxed font-mono text-sm" placeholder="Write your full article here..." />
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-text/10">
              <Save size={20} /> Publish Article
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
