"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import PostModal from './PostModal';

export default function PostInput() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow mb-6 p-4 flex items-center"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <Image 
            src="/post/user.jpg" 
            alt="Profile" 
            width={40} 
            height={40} 
            className="object-cover"
          />
        </div>
        <div 
        onClick={() => setIsModalOpen(true)}
        className="flex-1 p-2 border border-gray-300 rounded-full text-sm text-gray-500 cursor-pointer">
          Mulai ngobrol di komunitas
        </div>
      </div>

      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}