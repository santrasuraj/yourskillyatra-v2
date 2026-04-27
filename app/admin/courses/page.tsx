'use client';

import { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import EditModal from '../components/EditModal';
import Toast from '../components/Toast';
import Toggle from '../components/Toggle';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function AdminCourses() {
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
      id: '', name: '', duration: '', oldPrice: '', price: '', discount: '', popular: false, link: '', features: ['']
    });
    setIsModalOpen(true);
  };

  const handleEdit = (row: any, index: number) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(row))); // deep copy
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newItems = [...content.courses.items];
    newItems.splice(index, 1);
    handleSave({ ...content, courses: { ...content.courses, items: newItems } });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newItems = [...content.courses.items];
    if (editingIndex !== null) {
      newItems[editingIndex] = formData;
    } else {
      newItems.push(formData);
    }
    handleSave({ ...content, courses: { ...content.courses, items: newItems } });
  };

  if (loading) return <div className="animate-pulse h-64 bg-gray-200 rounded-3xl"></div>;

  const columns = [
    { key: 'name', label: 'Plan Name' },
    { key: 'price', label: 'Price (₹)', render: (val: string) => <span className="font-bold text-gray-900">₹{val}</span> },
    { key: 'duration', label: 'Duration' },
    { key: 'popular', label: 'Popular?', render: (val: boolean) => val ? <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded text-xs font-bold">Yes</span> : 'No' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <Toggle 
          label="Enable Courses Section"
          description="Toggle the visibility of the pricing and curriculum section on the homepage."
          enabled={content.courses.enabled !== false}
          onChange={(enabled) => handleSave({ ...content, courses: { ...content.courses, enabled } })}
        />
      </div>

      <AdminTable 
        title="Courses & Programs"
        description="Manage your training plans, pricing, and feature lists."
        columns={columns}
        data={content.courses.items}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingIndex !== null ? 'Edit Course' : 'Add New Course'}
      >
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Internal ID (e.g. launchpad)</label>
              <input required type="text" value={formData?.id} onChange={e => setFormData({...formData, id: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Course Name</label>
              <input required type="text" value={formData?.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Duration</label>
              <input required type="text" value={formData?.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input type="checkbox" id="popular" checked={formData?.popular} onChange={e => setFormData({...formData, popular: e.target.checked})} className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
              <label htmlFor="popular" className="text-sm font-bold text-gray-700">Mark as Popular / Best Value</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Old Price (₹)</label>
              <input required type="text" value={formData?.oldPrice} onChange={e => setFormData({...formData, oldPrice: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Sale Price</label>
              <input required type="text" value={formData?.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Discount Label</label>
              <input required type="text" value={formData?.discount} onChange={e => setFormData({...formData, discount: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Payment / Custom Link</label>
            <input required type="url" value={formData?.link} onChange={e => setFormData({...formData, link: e.target.value})} placeholder="https://topmate.io/..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white" />
          </div>

          <div className="border-t border-gray-100 pt-6">
            <label className="text-sm font-bold text-gray-700 block mb-4">Features List</label>
            <div className="space-y-3 mb-4">
              {formData?.features.map((feat: string, i: number) => (
                <div key={i} className="flex gap-2">
                  <input required type="text" value={feat} onChange={e => {
                    const nf = [...formData.features];
                    nf[i] = e.target.value;
                    setFormData({...formData, features: nf});
                  }} className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white" />
                  <button type="button" onClick={() => {
                    const nf = [...formData.features];
                    nf.splice(i, 1);
                    setFormData({...formData, features: nf});
                  }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => setFormData({...formData, features: [...formData.features, '']})} className="inline-flex gap-2 text-sm font-bold text-brand-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
              <Plus size={16} /> Add Feature
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-brand-text text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Course
            </button>
          </div>
        </form>
      </EditModal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
