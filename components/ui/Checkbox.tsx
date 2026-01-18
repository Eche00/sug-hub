import React, { InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className = '', ...props }) => {
  return (
    <div className="flex items-start space-x-3">
      <button
        type="button"
        onClick={() => onChange && onChange({ target: { checked: !checked } } as any)}
        className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center mt-0.5 transition ${
          checked ? 'bg-green-700 border-green-700' : 'border-gray-300 hover:border-green-600'
        } ${className}`}
        aria-checked={checked}
        role="checkbox"
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </button>
      <label className="text-sm text-gray-600 cursor-pointer" onClick={() => onChange && onChange({ target: { checked: !checked } } as any)}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;