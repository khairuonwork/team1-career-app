import React from 'react';
import Image from 'next/image';
import { FaBookmark, FaMapMarkerAlt } from 'react-icons/fa';

interface JobProps {
  job: {
    id: number;
    title: string;
    providerType: string;
    provider: string;
    level: string;
    price: string;
    image: string;
    tags: string[];
    address: string;
    postedDate: string;
  };
}

const JobCard = ({ job }: JobProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition border border-[#77A8D1]">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{job.title}</h3>
        <div className="text-[#456F92] text-sm">{job.price}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 my-3">
        <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded">
          {job.providerType}
        </span>
        <span className="bg-gray-200 text-gray-700 font-bold text-xs px-3 py-1 rounded">
          {job.level}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-1">
        {job.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded">
            {tag}
          </span>
        ))}
        {job.tags.length > 3 && (
          <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded">
            +{job.tags.length - 3}
          </span>
        )}
      </div>
      
      <div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="w-30 h-30 relative mr-2">
              <Image 
                src={job.image} 
                alt={`${job.provider} logo`} 
                fill 
                className="object-contain"
                sizes="80px"
              />
            </div>
          </div>
          
          <div className="flex flex-col text-[#456F92] text-sm">
            <div className="font-medium text-[#456F92] mb-0">{job.provider}</div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" size={12} />
              <span>{job.address}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-1 pt-1 border-t border-[#456F92]">
          <div className="text-[#456F92] text-sm">{job.postedDate}</div>
          <button className="text-gray-400 hover:text-[#456F92] p-1 rounded">
            <FaBookmark size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;