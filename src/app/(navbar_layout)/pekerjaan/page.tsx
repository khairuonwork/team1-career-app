"use client";

import React from 'react';
import SearchBar from '@/components/job/SearchBar';
import JobFilters from '@/components/job/JobFilters';
import JobList from '@/components/job/JobList';

export default function JobPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      
      <SearchBar />
      
      <h1 className="text-xl font-bold text-[#4882B4] mt-6 mb-6">Pekerjaan</h1>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="w-full md:w-1/4">
          <JobFilters />
        </div>
        <div className="w-full md:w-3/4">
          <JobList />
        </div>
      </div>
    </main>
  );
}