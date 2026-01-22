import React from 'react';
import { X, Upload, Save, User, Briefcase, Building, FileText, Plus } from 'lucide-react';
import { Executive } from '@/utils/excosData';

const positionOptions = [
  'President', 'Vice President', 'Secretary General', 'Financial Secretary',
  'Treasurer', 'PRO', 'Welfare Officer', 'Sports Director', 'Academic Director',
  'Social Director', 'Health Director', 'Other'
];

interface ExcoUpdateModalProps {
  onClose: () => void;
}

const ExcoUpdateModal: React.FC<ExcoUpdateModalProps> = ({ onClose }) => {
  // Static data for UI display only
  const excoMember: Executive = {
    id: 1,
    name: 'Alex Johnson',
    position: 'President',
    department: 'Computer Science',
    image: '',
    bio: 'Driving innovation and student engagement initiatives. Leading the student union with dedication and vision.'
  };

  const imagePreview = null;
  const showOtherPositionInput = false;
  const otherPositionValue = '';

  // Simple handlers that just log
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleImageChange = () => console.log('Image changed');
  const handlePositionChange = () => console.log('Position changed');
  const handleInputChange = () => console.log('Input changed');

  const handleInputChange = (field: keyof Executive, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Update Executive</h2>
              <p className="text-gray-600 mt-1">Edit {excoMember.name}'s information</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-2">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-green-800">
                      {excoMember.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <label className="absolute bottom-2 right-2 bg-green-800 text-white p-2 rounded-full cursor-pointer hover:bg-green-900 transition-colors shadow-lg">
                <Upload className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-gray-500">Click icon to update profile photo</p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-green-800" />
                Full Name
              </label>
              <input
                type="text"
                defaultValue={excoMember.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Position Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-green-800" />
                Position
              </label>
              <select
                defaultValue={excoMember.position}
                onChange={handlePositionChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition appearance-none bg-white"
                required
              >
                <option value="">Select Position</option>
                {positionOptions.map(pos => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
              
              {/* Custom Position Input */}
              {showOtherPositionInput && (
                <div className="mt-4">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Plus className="w-4 h-4 mr-2 text-green-800" />
                    Specify Position
                  </label>
                  <input
                    type="text"
                    value={otherPositionValue}
                    onChange={() => {}}
                    className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition bg-green-50"
                    placeholder="Enter custom position (e.g., Assistant Secretary, Event Coordinator)"
                  />
                  <p className="text-xs text-green-600 mt-2">
                    Please specify the executive position that's not in the list above
                  </p>
                </div>
              )}
            </div>

            {/* Department Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 mr-2 text-green-800" />
                Department
              </label>
              <input
                type="text"
                defaultValue={excoMember.department}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="Computer Science"
                required
              />
            </div>

            {/* ID Field (read-only) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Executive ID
              </label>
              <input
                type="text"
                defaultValue={excoMember.id}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-xl outline-none text-gray-600 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-2">
                This ID is automatically generated and cannot be changed
              </p>
            </div>

            {/* Bio Field */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2 text-green-800" />
                Biography / Description
              </label>
              <textarea
                defaultValue={excoMember.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Brief description about this executive member..."
                maxLength={200}
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500">
                  Provide a brief description of the executive member's role and responsibilities
                </p>
                <span className={`text-xs ${excoMember.bio.length > 180 ? 'text-red-500' : 'text-gray-500'}`}>
                  {excoMember.bio.length}/200
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 bg-white pt-6 border-t border-gray-200 mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-green-700 to-green-800 text-white rounded-xl hover:from-green-800 hover:to-green-900 transition-colors font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                disabled={isLoading || (showOtherPositionInput && !otherPositionValue)}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white rounded-xl hover:from-green-800 hover:to-green-900 transition-colors font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Update Executive
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcoUpdateModal;