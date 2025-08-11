import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  taxId: string;
  photo: string;
}

export default function EditProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
    taxId: '',
    photo: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = reader.result as string;
        setProfile((prev) => ({
          ...prev,
          photo: newPhoto,
        }));
        localStorage.setItem(
          'userProfile',
          JSON.stringify({ ...profile, photo: newPhoto })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = () => {
    setLoading(true);
    try {
      localStorage.setItem('userProfile', JSON.stringify(profile));
      alert('Profile saved locally!');
      navigate('/admin/profile');
    } catch (err) {
      console.error('Error saving profile', err);
      alert('Failed to save profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 flex justify-center bg-gray-50">
    <div className="w-full max-w-4xl lg:max-w-none">
    <div className="flex items-center m mb-10 gap-2 justify-start sm:justify-star">
          <button
            onClick={() => navigate('/admin/profile')}
            className="text-green-700 flex-shrink-0 hover:text-green-800"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-green-800">Edit</h1>
       
        </div>
 <div className="flex mb-8">
  <div className="relative">
    {/* Profile Image */}
    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center overflow-hidden">
      <img
        src={
          profile.photo ||
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
        }
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Hidden file input */}
    <input
      type="file"
      id="photoInput"
      accept="image/*"
      className="hidden"
      onChange={handlePhotoChange}
    />

    {/* Icon Label */}
    <label
      htmlFor="photoInput"
      className="absolute -top-2 -right-2 rounded-md cursor-pointer shadow-md"
      title="Change photo"
    >
       <FiEdit size={21} className="text-green-800" />


    </label>
  </div>
</div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">Edit Profile</h2>


        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7  mb-8">
          {[
            'firstName',
            'lastName',
            'email',
            'phone',
            'country',
            'city',
            'postalCode',
            'taxId',
          ].map((field) => (
            <input
              key={field}
              name={field}
              value={(profile as any)[field]}
              onChange={handleChange}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              className="px-4 py-3 rounded-xl shadow-md bg-white placeholder-gray-500 border border-gray-200 focus:outline-none w-full"
              type={
                field === 'email'
                  ? 'email'
                  : field === 'phone'
                  ? 'tel'
                  : 'text'
              }
            />
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={updateProfile}
            disabled={loading}
            className="bg-green-700 text-white px-10 py-3 rounded-full font-medium "
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
