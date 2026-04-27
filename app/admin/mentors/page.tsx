'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save } from 'lucide-react';

export default function AdminMentors() {
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
    setFormData({ name: '', role: '', emoji: '👨‍🏫', color: 'bg-orange-50', border: 'border-orange-200', text: 'text-brand-orange' });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row)));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newList = [...content.mentors.items];
    newList.splice(index, 1);
    handleSave({ ...content, mentors: { ...content.mentors, items: newList } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = [...content.mentors.items];
    if (editingIndex !== null) {
      newList[editingIndex] = formData;
    } else {
      newList.push(formData);
    }
    handleSave({ ...content, mentors: { ...content.mentors, items: newList } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'name', label: 'Mentor', render: (val: string, row: any) => (
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-sm border ${row.color} ${row.border}`}>
          {row.emoji}
        </div>
        <span className={`font-bold ${row.text}`}>{val}</span>
      </div>
    )},
    { key: 'role', label: 'Expertise / Role' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Mentors Section"
          description="Toggle the visibility of the Meet Your Mentors section on the homepage."
          enabled={content.mentors.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, mentors: { ...content.mentors, enabled } })}
        />
      </div>

      <AdminTable 
        title="Mentors & Trainers"
        description="Manage the list of industry experts and coaches."
        columns={columns}
        data={content.mentors.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Mentor' : 'Add Mentor'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Mentor Name</label>
              <input required type="text" value={formData?.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Expertise / Role</label>
              <input required type="text" value={formData?.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Emoji / Icon</label>
              <input required type="text" value={formData?.emoji} onChange={e => setFormData({...formData, emoji: e.target.value})} className="w-full px-4 py-3 text-2xl rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Color Setup (Preset)</label>
              <select 
                value={formData?.border} 
                onChange={e => {
                  const val = e.target.value;
                  if (val.includes('orange')) setFormData({...formData, border: 'border-orange-200', bg: 'bg-orange-50', text: 'text-brand-orange'});
                  if (val.includes('blue')) setFormData({...formData, border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-brand-blue'});
                  if (val.includes('emerald')) setFormData({...formData, border: 'border-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-600'});
                  if (val.includes('indigo')) setFormData({...formData, border: 'border-indigo-200', bg: 'bg-indigo-50', text: 'text-indigo-600'});
                }} 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all font-medium text-gray-800"
              >
                <option value="border-orange-200">Orange Theme</option>
                <option value="border-blue-200">Blue Theme</option>
                <option value="border-emerald-200">Emerald Theme</option>
                <option value="border-indigo-200">Indigo Theme</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Mentor
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
