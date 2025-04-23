import React from 'react';

const JobFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-[#77A8D1]">
      <div className="mb-4">
        <h2 className="font-semibold mb-3">Prioritaskan</h2>
        <div className="flex gap-2">
          <button className="bg-blue-100 text-[#6086A6] px-4 py-1 rounded-full text-sm border border-[#77A8D1]">
            Paling Cocok
          </button>
          <button className="bg-gray-100 text-[#6086A6] px-4 py-1 rounded-full text-sm border border-[#77A8D1]">
            Terbaru
          </button>
        </div>
      </div>
      
      <hr className="my-4 border-[#77A8D1]" />
      
      <div className="mb-4">
        <h2 className="font-semibold mb-3">Tipe Pekerjaan</h2>
        <div className="space-y-2">
          {[
            { id: 'full-time', label: 'Penuh Waktu' },
            { id: 'kontrak', label: 'Kontrak' },
            { id: 'magang', label: 'Magang' },
            { id: 'freelance', label: 'Freelance' },
            { id: 'part-time', label: 'Paruh Waktu' },
          ].map((category) => (
            <div key={category.id} className="flex items-center">
              <input 
                type="radio" 
                id={category.id} 
                name="jobType"
                className="h-4 w-4 text-[#77A8D1] border-gray-300 rounded-full focus:ring-[#77A8D1]"
              />
              <label htmlFor={category.id} className="ml-2 text-sm text-[#4882B4]">
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;