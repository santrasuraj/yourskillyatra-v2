'use client';

import { Edit2, Trash2, Plus, GripVertical } from 'lucide-react';

type Column = {
  key: string;
  label: string;
  render?: (val: any, row: any) => React.ReactNode;
};

type AdminTableProps = {
  columns: Column[];
  data: any[];
  onAdd: () => void;
  onEdit: (row: any, index: number) => void;
  onDelete: (index: number) => void;
  title: string;
  description: string;
};

export default function AdminTable({ columns, data, onAdd, onEdit, onDelete, title, description }: AdminTableProps) {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
          <p className="text-sm font-medium text-gray-500 mt-1">{description}</p>
        </div>
        <button 
          onClick={onAdd}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-text text-white font-bold rounded-xl hover:bg-brand-orange transition-all shadow-md shadow-brand-text/10"
        >
          <Plus size={18} />
          Add New
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <th className="px-6 py-4 w-12 text-center">#</th>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4">{col.label}</th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!Array.isArray(data) || data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} className="px-6 py-12 text-center text-gray-400 font-medium">
                  {Array.isArray(data) ? 'No records found. Click "Add New" to create one.' : 'Invalid data format. Expected an array.'}
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-gray-400">{index + 1}</span>
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-sm font-semibold text-gray-700">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => onEdit(row, index)}
                        className="p-2 bg-white border border-gray-200 rounded-lg text-blue-500 hover:border-blue-500 hover:bg-blue-50 transition-colors shadow-sm"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this item?')) {
                            onDelete(index);
                          }
                        }}
                        className="p-2 bg-white border border-gray-200 rounded-lg text-red-500 hover:border-red-500 hover:bg-red-50 transition-colors shadow-sm"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
