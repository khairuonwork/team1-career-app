import React from 'react';
import Image from 'next/image';

const PreviewCV = () => {
  return (
    <div className="flex justify-center items-start py-10 px-4 min-h-screen">
      <div className="w-full max-w-xl">
        {/* Tombol di atas preview */}
        <div className="mb-4">
          <button className="bg-[#3785C6] text-white px-3 py-2 rounded-md transition text-lg">
            Kustomisasi
          </button>
        </div>

        {/* Preview CV */}
        <div className="relative h-screen w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
          <Image
            src="/trendycv.svg" 
            alt='CV Preview'
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCV;
