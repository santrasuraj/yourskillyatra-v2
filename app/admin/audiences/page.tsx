'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save } from 'lucide-react';

export default function AdminAudiences() {
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
    setFormData({ title: '', desc: '', icon: '🌟', colorRgb: '249, 115, 22' });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row)));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newList = [...content.audiences.items];
    newList.splice(index, 1);
    handleSave({ ...content, audiences: { ...content.audiences, items: newList } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = [...content.audiences.items];
    if (editingIndex !== null) {
      newList[editingIndex] = formData;
    } else {
      newList.push(formData);
    }
    handleSave({ ...content, audiences: { ...content.audiences, items: newList } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'title', label: 'Audience Title', render: (val: string, row: any) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg shadow-sm bg-white border border-gray-100">
          {row.icon}
        </div>
        <span className="font-bold text-gray-900">{val}</span>
      </div>
    )},
    { key: 'desc', label: 'Description', render: (val: string) => <div className="text-gray-500 max-w-sm truncate">{val}</div> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Audiences Section"
          description="Toggle the visibility of the 'Who is it for?' section on the homepage."
          enabled={content.audiences.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, audiences: { ...content.audiences, enabled } })}
        />
      </div>

      <AdminTable 
        title="Target Audience Cards"
        description="Manage the 'Who is it for?' section content and UI cards."
        columns={columns}
        data={content.audiences.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Audience Card' : 'Add Audience Card'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Icon / Emoji</label>
              <input required type="text" value={formData?.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full px-4 py-3 text-2xl rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Glow Hover RGB (e.g. 59, 130, 246)</label>
              <input required type="text" value={formData?.colorRgb} onChange={e => setFormData({...formData, colorRgb: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
              <p className="text-xs text-gray-400 mt-1">This colors the mouse spotlight effect.</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Audience Title</label>
            <input required type="text" value={formData?.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Description</label>
            <textarea required rows={4} value={formData?.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 leading-relaxed" />
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Audience Card
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
