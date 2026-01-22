import React, { useState, useEffect } from 'react';
import { X, Upload, User, Briefcase, Building, FileText } from 'lucide-react';
import { Executive } from '@/utils/excosData';

interface ExcoUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  excoMember: Executive | null;
  onUpdate: (updatedData: Executive) => Promise<void>;
  isLoading?: boolean;
}

const positionOptions = [
  'President', 'Vice President', 'Secretary General', 'Financial Secretary',
  'Treasurer', 'PRO', 'Welfare Officer', 'Sports Director', 'Academic Director',
  'Social Director', 'Health Director', 'Other'
];

const ExcoUpdateModal: React.FC<ExcoUpdateModalProps> = ({ isOpen, onClose, excoMember, onUpdate }) => {
  const [formData, setFormData] = useState<Executive>({
    id: 0,
    name: '',
    position: '',
    department: '',
    image: '',
    bio: ''
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showOtherPositionInput, setShowOtherPositionInput] = useState(false);
  const [otherPositionValue, setOtherPositionValue] = useState('');

  useEffect(() => {
    if (excoMember) {
      setFormData(excoMember);
      setImagePreview(excoMember.image);
      if (!positionOptions.includes(excoMember.position)) {
        setShowOtherPositionInput(true);
        setOtherPositionValue(excoMember.position);
        setFormData(prev => ({ ...prev, position: 'Other' }));
      }
    }
  }, [excoMember, isOpen]);

  // Clear form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        id: 0,
        name: '',
        position: '',
        department: '',
        bio: '',
        image: ''
      });
      setImagePreview(null);
      setShowOtherPositionInput(false);
      setOtherPositionValue('');
    }
  }, [isOpen]);

  if (!isOpen || !excoMember) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const finalData: Executive = {
      ...formData,
      position: showOtherPositionInput && otherPositionValue ? otherPositionValue : formData.position,
      image: imagePreview || formData.image
    };

    try {
      await onUpdate(finalData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, position: value }));
    setShowOtherPositionInput(value === 'Other');
    if (value !== 'Other') setOtherPositionValue('');
  };

  const handleInputChange = (field: keyof Executive, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[83vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Update Executive</h2>
            <p className="text-gray-600 mt-1">Edit {excoMember.name}'s information</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-2">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl font-bold text-green-800">{formData.name.charAt(0)}</span>
                )}
              </div>
              <label className="absolute bottom-2 right-2 bg-green-800 text-white p-2 rounded-full cursor-pointer hover:bg-green-900">
                <Upload className="w-4 h-4" />
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>
          </div>

          {/* Name, Position, Department, Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-green-800" /> Full Name
              </label>
              <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border rounded-xl" required />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-green-800" /> Position
              </label>
              <select value={formData.position} onChange={handlePositionChange} className="w-full px-4 py-3 border rounded-xl" required>
                <option value="">Select Position</option>
                {positionOptions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
              </select>

              {showOtherPositionInput && (
                <input type="text" value={otherPositionValue} onChange={e => setOtherPositionValue(e.target.value)} placeholder="Enter custom position" className="mt-4 w-full px-4 py-3 border rounded-xl bg-green-50" required />
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 mr-2 text-green-800" /> Department
              </label>
              <input type="text" value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })} className="w-full px-4 py-3 border rounded-xl" required />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2 text-green-800" /> Bio
              </label>
              <textarea value={formData.bio} onChange={e => setFormData({ ...formData, bio: e.target.value })} rows={4} className="w-full px-4 py-3 border rounded-xl" maxLength={200} />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-3 border rounded-xl">Cancel</button>
            <button type="submit" disabled={loading || (showOtherPositionInput && !otherPositionValue)} className="px-6 py-3 bg-green-700 text-white rounded-xl">
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcoUpdateModal;
