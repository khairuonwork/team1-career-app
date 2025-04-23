"use client";

import React from 'react';
import Image from 'next/image';
import { StepIndicator } from "@/components/cvmaker/step-indicator";

export default function Step4Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E7F1F7" }}>
      {/* Header with steps */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <StepIndicator step={3}/>
        
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center justify-center min-h-[calc(100vh-200px)]">
          {/* CV Preview - Left Side */}
          <div className="w-full md:w-1/2 max-w-md flex justify-center">
            <div className="aspect-[3/4]">
              <Image 
                src="/trendycv.svg" 
                alt="CV Preview" 
                width={400} 
                height={560} 
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Download Section - Right Side */}
          <div className="w-full md:w-1/2 max-w-md flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#3785C6] mb-8">CV-mu selesai!</h1>
            
            <button className="bg-[#FFFFFF] text-bold px-4 py-4 rounded-2xl flex items-center justify-center gap-3 text-xl mb-6 w-[250px]">
              <svg width="35" height="35" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.7085 15.125H27.8752V0.375H13.1252V15.125H3.29183L20.5002 34.7917L37.7085 15.125ZM0.833496 39.7083H40.1668V44.625H0.833496V39.7083Z" fill="#3785C6"/>
              </svg>
              <span className="font-bold">Unduh PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}