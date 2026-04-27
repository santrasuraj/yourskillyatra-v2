'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save } from 'lucide-react';

export default function AdminTestimonials() {
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
    setFormData({ name: '', role: '', initials: '', color: 'bg-orange-100 text-brand-orange', img: '', badge: '', quote: '' });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row)));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newList = [...content.testimonials.items];
    newList.splice(index, 1);
    handleSave({ ...content, testimonials: { ...content.testimonials, items: newList } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = [...content.testimonials.items];
    if (editingIndex !== null) {
      newList[editingIndex] = formData;
    } else {
      newList.push(formData);
    }
    handleSave({ ...content, testimonials: { ...content.testimonials, items: newList } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'name', label: 'Name', render: (val: string, row: any) => (
      <div className="flex items-center gap-3">
        {row.img ? (
          <img src={row.img} alt={val} className="w-8 h-8 rounded-full bg-gray-100" />
        ) : (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${row.color}`}>{row.initials}</div>
        )}
        <span className="font-bold text-gray-900">{val}</span>
      </div>
    )},
    { key: 'role', label: 'Role / Designation' },
    { key: 'badge', label: 'Badge' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Success Stories Section"
          description="Toggle the visibility of the learner reviews section on the homepage."
          enabled={content.testimonials.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, testimonials: { ...content.testimonials, enabled } })}
        />
      </div>

      <AdminTable 
        title="Success Stories (Testimonials)"
        description="Manage learner reviews and success stories."
        columns={columns}
        data={content.testimonials.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Testimonial' : 'Add Testimonial'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Student Name</label>
              <input required type="text" value={formData?.name} onChange={e => {
                const nameParts = e.target.value.split(' ');
                const initials = nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase() : e.target.value.slice(0, 2).toUpperCase();
                setFormData({...formData, name: e.target.value, initials});
              }} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Role (e.g. Final Year CSE)</label>
              <input required type="text" value={formData?.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Profile Image URL (Optional)</label>
              <input type="url" value={formData?.img} onChange={e => setFormData({...formData, img: e.target.value})} placeholder="https://..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Badge (e.g. Fresher, Student)</label>
              <input required type="text" value={formData?.badge} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 font-medium" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Color Theme (Tailwind Classes)</label>
            <select value={formData?.color} onChange={e => setFormData({...formData, color: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all font-medium text-gray-800">
              <option value="bg-orange-100 text-brand-orange">Orange</option>
              <option value="bg-blue-100 text-brand-blue">Blue</option>
              <option value="bg-emerald-100 text-emerald-600">Emerald</option>
              <option value="bg-purple-100 text-purple-600">Purple</option>
              <option value="bg-pink-100 text-pink-600">Pink</option>
            </select>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Testimonial Quote</label>
            <textarea required rows={4} value={formData?.quote} onChange={e => setFormData({...formData, quote: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition-all text-gray-900 leading-relaxed" />
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Testimonial
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
