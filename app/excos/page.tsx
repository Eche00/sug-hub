"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Edit2 } from 'lucide-react';
import ExcoUpdateModal from './modals/ExcoUpdateModal';
import { excosByYear, Executive, getYears } from '@/utils/excosData';
import { useExcoModal } from '@/utils/logics/useExcoModal';

function ExcoCard({ exco, onEdit }: { exco: Executive; onEdit: (exco: Executive) => void }) {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onEdit(exco);
  };

  return (
    <div className="shrink-0 w-65 sm:w-70 md:w-75 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300 relative">
      <div className="relative h-48 bg-linear-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-linear-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-green-800">{exco.name.charAt(0)}</span>
          </div>
        </div>

        <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-green-800 hover:scale-110 transition-all duration-200 z-20 cursor-pointer"
          aria-label={`Edit ${exco.name}`}
        >
          <Edit2 className="w-4 h-4 text-green-800 group-hover:text-white transition-colors duration-200" />
        </button>

        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-green-800 text-white text-xs font-semibold rounded-full">{exco.position}</span>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{exco.name}</h4>
        <p className="text-gray-600 mb-3"><span className="font-bold">Department:</span> {exco.department}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">{exco.bio}</p>
      </div>
    </div>
  );
}

export default function ExcosPage() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [mounted, setMounted] = useState(false);
  const years = getYears();
  const currentExcos = excosByYear[selectedYear] || [];

  // Modal hook
  const { isModalOpen, selectedExco, openExcoModal, closeExcoModal, handleUpdate } = useExcoModal();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {!mounted ? (
        <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>
      ) : (
        <main>
          {/* Year selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-medium ${selectedYear === year ? 'bg-green-800 text-white' : 'bg-gray-50 text-gray-700 border border-gray-300'}`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Executive list */}
          <div className="flex gap-4 overflow-x-auto p-4">
            {currentExcos.map(exco => (
              <ExcoCard key={exco.id} exco={exco} onEdit={openExcoModal} />
            ))}
          </div>
        </main>
      )}

      {/* Modal */}
      <ExcoUpdateModal
        isOpen={isModalOpen}
        onClose={closeExcoModal}
        excoMember={selectedExco}
        onUpdate={handleUpdate}
      />
    </>
  );
}
