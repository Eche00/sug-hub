// utils/logics/useExcoModal.ts - COMPATIBLE VERSION
import { useState } from 'react';
import { Executive } from '../excosData';

export const useExcoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExco, setSelectedExco] = useState<Executive | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const openExcoModal = (excoMember: Executive) => {
    setSelectedExco(excoMember);
    setIsModalOpen(true);
  };

  const closeExcoModal = () => {
    setSelectedExco(null);
    setIsModalOpen(false);
  };

  const handleUpdate = async (updatedData: Executive): Promise<void> => {
    console.log('Updated exco data:', updatedData);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Exco updated successfully:', updatedData);
        resolve();
      }, 1500);
    });
  };

  return {
    isModalOpen,
    selectedExco,
    openExcoModal,
    closeExcoModal,
    handleUpdate,
  };
};
