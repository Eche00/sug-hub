import { useState } from 'react';

interface Executive {
  id: string;
  name: string;
  position: string;
  department: string;
  email?: string;
  phone?: string;
  bio?: string;
  imageUrl?: string;
}

export const useExcoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExco, setSelectedExco] = useState<Executive | null>(null);

  const openModal = (excoMember: Executive) => {
    setSelectedExco(excoMember);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExco(null);
  };

  const handleUpdate = async (updatedData: Executive): Promise<void> => {
    // Here you would typically make an API call
    console.log('Updated exco data:', updatedData);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, you would update your state or make API call here
        console.log('Exco updated successfully:', updatedData);
        resolve();
      }, 1500);
    });
  };

  return {
    isModalOpen,
    selectedExco,
    openModal,
    closeModal,
    handleUpdate
  };
};