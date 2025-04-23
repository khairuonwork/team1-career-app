"use client";

import React from 'react';
import PersonalDetailsForm from '@/components/cvmaker/PersonalDetailsForm';
import PreviewCV from '@/components/cvmaker/PreviewCV';

export default function Step3Page() {

  return (
    <div className="min-h-screen flex">
      <div className="w-3/5 bg-white p-8 flex justify-center">
        {/* Form section with white background */}
        <div className="w-full max-w-3xl">
          <PersonalDetailsForm />
        </div>
      </div>
      
      <div className="w-2/5" style={{ backgroundColor: "#E7F1F7" }}>
        <PreviewCV />
      </div>
    </div>
  );
}