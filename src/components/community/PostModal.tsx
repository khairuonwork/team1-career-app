"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({ isOpen, onClose }: PostModalProps) {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image 
                src="/profile-placeholder.jpg" 
                alt="John Doe" 
                width={40} 
                height={40} 
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">New York, NY</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L2 22M2 2L22 22" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <textarea
              placeholder="Apa yang ingin kamu obrolin?"
              className="w-full h-32 resize-none border-0 focus:ring-0 focus:outline-none text-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-100">
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.33 17.9183C25.33 22.5117 21.5933 26.2483 17 26.2483C12.4067 26.2483 8.67 22.5117 8.67 17.9183V16.6683H11.17V17.9183C11.17 21.1333 13.785 23.7483 17 23.7483C20.215 23.7483 22.83 21.1333 22.83 17.9183V16.6683H25.33V17.9183ZM17 0.75C8.04 0.75 0.75 8.04 0.75 17C0.75 25.96 8.04 33.25 17 33.25C25.96 33.25 33.25 25.96 33.25 17C33.25 8.04 25.96 0.75 17 0.75Z" fill="#FF8C00"/>
                </svg>
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-100">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.2026 12.8785C23.5126 12.8785 22.946 12.3185 22.946 11.6285C22.946 10.9385 23.4976 10.3785 24.1876 10.3785H24.2026C24.8926 10.3785 25.4526 10.9385 25.4526 11.6285C25.4526 12.3185 24.8926 12.8785 24.2026 12.8785ZM16.001 23.9518C12.421 23.9518 9.50931 21.0385 9.50931 17.4585C9.50931 13.8802 12.421 10.9685 16.001 10.9685C19.581 10.9685 22.4926 13.8802 22.4926 17.4585C22.4926 21.0385 19.581 23.9518 16.001 23.9518ZM25.366 6.00516C25.0843 5.91683 24.6743 5.73183 24.3293 5.3535C24.186 5.19683 23.9926 4.80516 23.806 4.4285C23.3026 3.41016 22.6143 2.01683 21.2293 1.4335C19.4493 0.686829 12.616 0.683496 10.7776 1.43016C9.41097 1.99183 8.71431 3.39183 8.20597 4.4135C8.01431 4.79683 7.81764 5.1935 7.67097 5.3535C7.32764 5.7335 6.91764 5.91683 6.66264 5.9985C1.16764 7.5185 0.160973 11.0902 0.160973 17.5735C0.160973 26.9468 2.44764 31.1285 16.001 31.1285C29.5526 31.1285 31.8393 26.9468 31.8393 17.5735C31.8393 11.0902 30.8343 7.5185 25.366 6.00516Z" fill="#FF8C00"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.0012 13.4677C13.7995 13.4677 12.0095 15.2577 12.0095 17.4593C12.0095 19.661 13.7995 21.451 16.0012 21.451C18.2029 21.451 19.9929 19.661 19.9929 17.4593C19.9929 15.2577 18.2029 13.4677 16.0012 13.4677Z" fill="#FF8C00"/>
                </svg>
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-100">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0909 13.3333H28.1818C29.0772 13.3333 29.9638 13.5057 30.791 13.8407C31.6182 14.1758 32.3699 14.6668 33.003 15.2859C33.6361 15.9049 34.1384 16.6399 34.481 17.4487C34.8236 18.2575 35 19.1244 35 19.9999C35 20.8754 34.8236 21.7423 34.481 22.5511C34.1384 23.36 33.6361 24.0949 33.003 24.714C32.3699 25.333 31.6182 25.8241 30.791 26.1591C29.9638 26.4941 29.0772 26.6666 28.1818 26.6666H24.0909M15.9091 26.6666H11.8182C10.9228 26.6666 10.0362 26.4941 9.20898 26.1591C8.38176 25.8241 7.63013 25.333 6.997 24.714C5.71834 23.4637 5 21.768 5 19.9999C5 18.2318 5.71834 16.5361 6.997 15.2859C8.27566 14.0356 10.0099 13.3333 11.8182 13.3333H15.9091M14.5455 19.9999H25.4545" stroke="#FF8C00" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-100">
                <svg width="24" height="24" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.7024 16.6317H25.3191V14.1317H12.7024V16.6317ZM12.7024 23.5717H19.0624V21.0717H12.7024V23.5717ZM5.21077 36.25H34.7891V3.75H5.21077V36.25Z" fill="#FF8C00"/>
                  <path d="M36.5 20.2083V34.7916M29.2083 27.4999H43.7917" stroke="#4882B4" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Tags Section */}
          <div className="pt-4">
            <h4 className="font-medium mb-2">Tag</h4>
            <p className="text-sm text-gray-500 mb-3">
              Berikan tag yang relevan setidaknya 5 dengan topik yang ingin kamu obrolin.
            </p>
            
            {/* Tag List */}
            <div className="flex flex-wrap gap-2">
              <button className="border border-[#4882B4] text-[#4882B4] text-sm px-4 py-1 rounded-full flex items-center gap-1">
                <span className="mr-2">Tambah tag</span>
                <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.49999 1.20825V15.7916M1.20833 8.49992H15.7917" stroke="#4882B4" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button className="bg-white text-[#4882B4] border border-[#4882B4] rounded-full py-2 px-6 font-medium hover:bg-blue-50 flex items-center justify-center">
            <span className="mr-3">Posting</span>
            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M20.3603 0.855542C20.3113 0.763876 20.2373 0.688876 20.1457 0.639917C17.9728 -0.516333 4.9738 3.51283 1.6113 5.45242C0.735259 5.95763 0.344634 6.55138 0.451925 7.21388C0.7613 9.13263 5.93109 10.5868 8.7363 11.2378L14.004 5.97117C14.3092 5.66596 14.804 5.66596 15.1092 5.97117C15.4144 6.27638 15.4144 6.77117 15.1092 7.07638L9.79047 12.393C10.4582 15.2274 11.8967 20.243 13.7853 20.5472C13.8561 20.5587 13.9269 20.5649 13.9967 20.5649C14.5738 20.5649 15.0946 20.1691 15.5457 19.3878C17.4853 16.0285 21.5175 3.03158 20.3603 0.855542Z" 
                fill="#4882B4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
