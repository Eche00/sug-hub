// utils/logics/useExcoModal.ts - COMPATIBLE VERSION
import { useState } from 'react';
import { Executive as ExcosDataExecutive } from '@/utils/excosData';

// Use the same interface from excosData
type Executive = ExcosDataExecutive;

export const useExcoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExco, setSelectedExco] = useState<Executive | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const openModal = (excoMember: Executive) => {
    setSelectedExco(excoMember);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExco(null);
    setIsUpdating(false);
  };

  const handleUpdate = async (updatedData: Executive): Promise<void> => {
    setIsUpdating(true);
    
    try {
      // Simulate API call
      console.log('Updating exco:', updatedData);
      
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log('Update complete');
          resolve(null);
        }, 1500);
      });
      
      // In a real app, you would update your state here
      // For now, we'll just close the modal
      closeModal();
      
    } catch (error) {
      console.error('Update failed:', error);
      throw error;
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    isModalOpen,
    selectedExco,
    isUpdating,
    openModal,
    closeModal,
    handleUpdate
  };
};