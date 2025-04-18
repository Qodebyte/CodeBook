import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string; 
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type, value, onChange, name, required , error}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name} 
        required={required}
        className={`mt-1 block w-full  outline-blue-800 text-gray-950 border-blue-600 border-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 ${
          error ? 'border-red-500' : ''
        }`}/>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;