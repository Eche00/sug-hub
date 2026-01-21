"use client";

import React, { useState, useEffect } from 'react';
import { X, Upload, Save, Mail, Phone, User, Briefcase, Building, FileText, Plus } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  phone?: string;
  bio?: string;
  imageUrl?: string;
}

interface ExcoUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  excoMember: Executive | null;
  onUpdate: (updatedData: Executive) => Promise<void>;
}

const ExcoUpdateModal: React.FC<ExcoUpdateModalProps> = ({
  isOpen,
  onClose,
  excoMember,
  onUpdate
}) => {
  const [formData, setFormData] = useState<Executive>({
    id: 0,
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    bio: '',
    imageUrl: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showOtherPositionInput, setShowOtherPositionInput] = useState(false);
  const [otherPositionValue, setOtherPositionValue] = useState('');

  const positionOptions = [
    'President',
    'Vice President',
    'Secretary General',
    'Financial Secretary',
    'Treasurer',
    'PRO',
    'Welfare Officer',
    'Sports Director',
    'Academic Director',
    'Social Director',
    'Health Director',
    'Other'
  ];

  // Initialize form with exco data when modal opens
  useEffect(() => {
    if (excoMember) {
      setFormData(excoMember);
      setImagePreview(excoMember.imageUrl || null);
      
      // Check if the position is "Other" or not in the predefined options
      const isOtherPosition = !positionOptions.includes(excoMember.position) && excoMember.position !== '';
      if (isOtherPosition) {
        setShowOtherPositionInput(true);
        setOtherPositionValue(excoMember.position);
        setFormData(prev => ({ ...prev, position: 'Other' }));
      }
    }
  }, [excoMember]);

  if (!isOpen || !excoMember) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare final data - if "Other" was selected, use the custom input value
    const finalData = {
      ...formData,
      position: showOtherPositionInput && otherPositionValue ? otherPositionValue : formData.position
    };
    
    try {
      await onUpdate(finalData);
      onClose();
    } catch (error) {
      console.error('Failed to update exco:', error);
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
        setFormData(prev => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({...formData, position: value});
    
    // Show/hide the "Other" input field
    if (value === 'Other') {
      setShowOtherPositionInput(true);
      // If there's already a custom position, keep it
      if (!otherPositionValue && excoMember && !positionOptions.includes(excoMember.position)) {
        setOtherPositionValue(excoMember.position);
      }
    } else {
      setShowOtherPositionInput(false);
      setOtherPositionValue('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 ">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[83vh] overflow-y-auto sm:mt-10 mt-8 ">
        {/* Header */}
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
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-2">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-linear-to-br from-green-50 to-blue-50">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-green-800">
                      {formData.name.charAt(0)}
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
            {/* Name */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-green-800" />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Position */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-green-800" />
                Position
              </label>
              <select
                value={formData.position}
                onChange={handlePositionChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition appearance-none bg-white"
                required
              >
                <option value="">Select Position</option>
                {positionOptions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
              
              {/* Custom Position Input - Shows when "Other" is selected */}
              {showOtherPositionInput && (
                <div className="mt-4 animate-fadeIn">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Plus className="w-4 h-4 mr-2 text-green-800" />
                    Specify Position
                  </label>
                  <input
                    type="text"
                    value={otherPositionValue}
                    onChange={(e) => setOtherPositionValue(e.target.value)}
                    className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition bg-green-50"
                    placeholder="Enter custom position (e.g., Assistant Secretary, Event Coordinator)"
                    required={showOtherPositionInput}
                  />
                  <p className="text-xs text-green-600 mt-2">
                    Please specify the executive position that's not in the list above
                  </p>
                </div>
              )}
            </div>

            {/* Department */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 mr-2 text-green-800" />
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="Computer Science"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 mr-2 text-green-800" />
                Email Address
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="exco@university.edu"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 mr-2 text-green-800" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                placeholder="+234 800 000 0000"
              />
            </div>

            {/* ID (read-only) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Executive ID
              </label>
              <input
                type="text"
                value={formData.id}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-xl outline-none text-gray-600"
              />
              <p className="text-xs text-gray-500 mt-2">
                This ID is automatically generated and cannot be changed
              </p>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2 text-green-800" />
                Biography / Description
              </label>
              <textarea
                value={formData.bio || ''}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Brief description about this executive member..."
                maxLength={200}
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500">
                  Provide a brief description of the executive member's role and responsibilities
                </p>
                <span className={`text-xs ${(formData.bio?.length || 0) > 180 ? 'text-red-500' : 'text-gray-500'}`}>
                  {formData.bio?.length || 0}/200
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
                disabled={loading || (showOtherPositionInput && !otherPositionValue)}
                className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-green-700 to-green-800 text-white rounded-xl hover:from-green-800 hover:to-green-900 transition-colors font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Update Executive
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcoUpdateModal;