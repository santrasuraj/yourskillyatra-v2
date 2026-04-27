'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save } from 'lucide-react';

export default function AdminFeatures() {
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
    setFormData({ title: '', desc: '' });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row)));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newList = [...content.features.items];
    newList.splice(index, 1);
    handleSave({ ...content, features: { ...content.features, items: newList } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = [...content.features.items];
    if (editingIndex !== null) {
      newList[editingIndex] = formData;
    } else {
      newList.push(formData);
    }
    handleSave({ ...content, features: { ...content.features, items: newList } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'title', label: 'Feature Title', render: (val: string) => <div className="font-bold text-gray-900">{val}</div> },
    { key: 'desc', label: 'Description', render: (val: string) => <div className="text-gray-500 max-w-md truncate">{val}</div> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Features Section"
          description="Toggle the visibility of the Features bento grid on the homepage."
          enabled={content.features.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, features: { ...content.features, enabled } })}
        />
      </div>

      <AdminTable 
        title="Bento Grid Features"
        description="Manage the features listed in the Bento Grid section."
        columns={columns}
        data={content.features.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Feature' : 'Add Feature'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Title</label>
            <input required type="text" value={formData?.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Description</label>
            <textarea required rows={4} value={formData?.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 leading-relaxed" />
          </div>
          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Feature
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
