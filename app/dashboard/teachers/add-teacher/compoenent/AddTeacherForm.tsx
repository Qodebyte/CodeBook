"use client";

import React, { useState } from 'react';
import { ChevronsLeft, Save } from 'lucide-react';
import Input from './Input';
import Select from './Select';
import Toast from '@/app/components/Toast';
import UploadImage from './UploadInput';
import Link from 'next/link';


interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const AddTeacherForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    address: '',
    gender: 'male',
    state: '',
    city: '',
    profilePicture: null as File | null,
    highestCert: '',
    schoolAttended: '',
    yearOfGraduation: '',
  });
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({ ...formData, profilePicture: file });
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    setToast({
      message: 'Form saved successfully!',
      type: 'success',
    });
  };

  const handleToastClose = () => {
    setToast(null);
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/teachers" className='cursor-pointer'>All Teachers List</Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Teacher</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <Save className="text-blue-500" />
          <p className="text-[10px] md:text-md">Save</p>
        </button>
      </div>

      <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 bg-[#FFFFFF] rounded-md">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <Input
            label="First Name"
            placeholder="Enter first name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            label="Date of Birth"
            placeholder="dd/mm/yyyy"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <Input
            label="Phone"
            placeholder="Enter contact number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            label="Address"
            placeholder="Area and street"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <Select
                label="Select School Type"
                options={[
                  { label: 'Select School Type', value: '' },
                  { label: 'Primary', value: 'primary' },
                  { label: 'Secondary', value: 'secondary' },
                ]}
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />

           <Select
                label="Select Subject"
                options={[
                  { label: 'Select Subject', value: '' },
                  { label: 'Home Economics', value: 'home-economics' },
                  { label: 'Chemistry', value: 'chemistry' },
                ]}
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4 mt-8">Contact Information</h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Select
                label="State"
                options={[
                  { label: 'Select State', value: '' },
                  { label: 'State 1', value: 'state1' },
                  { label: 'State 2', value: 'state2' },
                ]}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <Select
                label="City"
                options={[
                  { label: 'Select City', value: '' },
                  { label: 'City 1', value: 'city1' },
                  { label: 'City 2', value: 'city2' },
                ]}
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full p-4 rounded-lg">
          <UploadImage onChange={handleFileChange} />

          <h2 className="text-lg font-semibold mb-4 mt-8">Qualification Information</h2>
              

              <Select
                label="Highest Certificate"
                options={[
                  { label: 'Select Certificate Qualifications', value: '' },
                  { label: 'First School Leaving Certificate', value: 'first_school_leaving_cert' },
                  { label: 'WEAC or NECO', value: 'weac_neco' },
                  { label: 'Bachelor of Science', value: 'bsc' },
                  { label: 'Bachelor of Arts', value: 'ba' },
                  {label: 'Masters', value: 'master'},
                  {label: 'Proffessor', value: 'proffesor'}
                ]}
                name="highestCert"
                value={formData.highestCert}
                onChange={handleInputChange}
              />
    
              <Input
                label="Name of School Of Cert"
                placeholder="Enter th name of the School Certificate was Acquired from"
                type="text"
                name="schoolAttended"
                value={formData.schoolAttended}
                onChange={handleInputChange}
              />
    
              <Input
                label="Year of Graduation/Exist"
                placeholder="Enter the year of School Exist"
                type="date"
                name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleInputChange}
              />
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
    </>
  );
};

export default AddTeacherForm;