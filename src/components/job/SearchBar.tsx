import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

interface SearchBarProps {
  placeholder?: string;
  locationPlaceholder?: string;
}

const SearchBar = ({ 
  placeholder = "Cari Nama Pekerjaan, Skill, dan Perusahaan",
  locationPlaceholder = "Semua Kota/Provinsi/Negara"
}: SearchBarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locationPlaceholder);
  
  const locations = [
    "Semua Kota/Provinsi/Negara",
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Medan",
    "Makassar"
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <div className="relative flex-grow md:w-[48%]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-[#6086A6]" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-[#DDF0FF] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-[#6086A6]"
          />
        </div>
        
        <div className="relative flex-grow md:flex-grow-0 md:w-[37%]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="text-[#6086A6]" />
          </div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-[#DDF0FF] focus:outline-none focus:ring-1 focus:ring-blue-500 text-left text-[#6086A6]"
          >
            <span className="truncate">{selectedLocation}</span>
            <FaChevronDown className="text-[#6086A6] ml-2" size={12} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsDropdownOpen(false);
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button className="bg-[#4682B4] text-white px-6 py-2 rounded-lg md:w-[15%]">
          CARI
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-2">
        <div className="flex items-center border border-[#77A8D1] rounded-full px-4 py-2">
          <FaSearch className="text-[#6086A6] mr-2" size={14} />
          <span className="text-sm text-[#6086A6] mr-1">Recent:</span>
          <span className="text-sm text-[#456F92] font-bold">Remote Marketing</span>
        </div>
        
        <div className="flex items-center border border-[#77A8D1] rounded-full px-4 py-2">
          <FaSearch className="text-[#6086A6] mr-2" size={14} />
          <span className="text-sm text-[#6086A6] mr-1">Trending:</span>
          <span className="text-sm text-[#456F92] font-bold">PT. Tokopedia</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;