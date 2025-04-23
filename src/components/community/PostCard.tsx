import React from 'react';
import Image from 'next/image';
import { FaEllipsisV } from 'react-icons/fa';

interface PostCardProps {
  post: {
    id: number;
    author: string;
    location: string;
    timeAgo: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
    tags: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100">
      {/* Post header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <Image 
              src="/profile-placeholder.jpg" 
              alt={post.author} 
              width={48} 
              height={48} 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{post.author}</h3>
            <p className="text-sm text-gray-500">{post.timeAgo} | {post.location}</p>
          </div>
        </div>
        <button className="text-gray-500">
          <FaEllipsisV className="h-5 w-5" />
        </button>
      </div>
      
      {/* Post image */}
      <div className="w-full h-80 relative">
        <Image 
          src="/handshake-meeting.jpg" 
          alt="Post image" 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Post content */}
      <div className="p-4">
        <p className="text-base mb-3">{post.content}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded">{tag}</span>
          ))}
        </div>
        
        {/* Post stats */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
          <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M5.87697 8.40283L9.2103 0.902832C9.87334 0.902832 10.5092 1.16622 10.9781 1.63507C11.4469 2.10391 11.7103 2.73979 11.7103 3.40283V6.73616H16.427C16.6686 6.73343 16.9079 6.78325 17.1283 6.88218C17.3487 6.98111 17.545 7.12678 17.7035 7.30909C17.8621 7.49141 17.9791 7.70602 18.0464 7.93804C18.1138 8.17007 18.1299 8.41396 18.0936 8.65283L16.9436 16.1528C16.8834 16.5503 16.6815 16.9125 16.3752 17.1728C16.069 17.4332 15.6789 17.574 15.277 17.5695H5.87697M5.87697 8.40283V17.5695M5.87697 8.40283H3.37697C2.93494 8.40283 2.51102 8.57843 2.19846 8.89099C1.8859 9.20355 1.7103 9.62747 1.7103 10.0695V15.9028C1.7103 16.3449 1.8859 16.7688 2.19846 17.0813C2.51102 17.3939 2.93494 17.5695 3.37697 17.5695H5.87697" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            <span>{post.likes} suka</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4131 14.6716C12.8672 16.2176 10.8324 16.9663 8.81032 16.9226C6.06429 16.8632 1.24805 16.9063 1.24805 16.9063L2.93582 14.2156C2.93582 14.2156 1.28821 11.7684 1.28821 9.23987C1.28674 7.2711 2.03634 5.30275 3.54106 3.79836C6.54051 0.79781 11.4136 0.79781 14.4131 3.79759C17.418 6.80278 17.4125 11.6718 14.4131 14.6716Z" stroke="black" strokeWidth="1.25" strokeLinecap="round"/>
            </svg>
              <span>{post.comments} komentar</span>
            </div>
            <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M5.43043 10.3688L10.4897 13.3538M10.4823 5.11883L5.43043 8.10383M14.623 3.98633C14.623 5.22897 13.6281 6.23633 12.4008 6.23633C11.1735 6.23633 10.1786 5.22897 10.1786 3.98633C10.1786 2.74369 11.1735 1.73633 12.4008 1.73633C13.6281 1.73633 14.623 2.74369 14.623 3.98633ZM5.73412 9.23633C5.73412 10.479 4.73919 11.4863 3.51189 11.4863C2.2846 11.4863 1.28967 10.479 1.28967 9.23633C1.28967 7.99369 2.2846 6.98633 3.51189 6.98633C4.73919 6.98633 5.73412 7.99369 5.73412 9.23633ZM14.623 14.4863C14.623 15.729 13.6281 16.7363 12.4008 16.7363C11.1735 16.7363 10.1786 15.729 10.1786 14.4863C10.1786 13.2437 11.1735 12.2363 12.4008 12.2363C13.6281 12.2363 14.623 13.2437 14.623 14.4863Z" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              <span>{post.shares} kali dibagikan</span>
            </div>
          </div>
        </div>
        
        {/* Post actions - removed border-t and changed to rounded buttons */}
        <div className="flex gap-2">
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.87697 8.40283L9.2103 0.902832C9.87334 0.902832 10.5092 1.16622 10.9781 1.63507C11.4469 2.10391 11.7103 2.73979 11.7103 3.40283V6.73616H16.427C16.6686 6.73343 16.9079 6.78325 17.1283 6.88218C17.3487 6.98111 17.545 7.12678 17.7035 7.30909C17.8621 7.49141 17.9791 7.70602 18.0464 7.93804C18.1138 8.17007 18.1299 8.41396 18.0936 8.65283L16.9436 16.1528C16.8834 16.5503 16.6815 16.9125 16.3752 17.1728C16.069 17.4332 15.6789 17.574 15.277 17.5695H5.87697M5.87697 8.40283V17.5695M5.87697 8.40283H3.37697C2.93494 8.40283 2.51102 8.57843 2.19846 8.89099C1.8859 9.20355 1.7103 9.62747 1.7103 10.0695V15.9028C1.7103 16.3449 1.8859 16.7688 2.19846 17.0813C2.51102 17.3939 2.93494 17.5695 3.37697 17.5695H5.87697" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Suka</span>
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4131 14.6716C12.8672 16.2176 10.8324 16.9663 8.81032 16.9226C6.06429 16.8632 1.24805 16.9063 1.24805 16.9063L2.93582 14.2156C2.93582 14.2156 1.28821 11.7684 1.28821 9.23987C1.28674 7.2711 2.03634 5.30275 3.54106 3.79836C6.54051 0.79781 11.4136 0.79781 14.4131 3.79759C17.418 6.80278 17.4125 11.6718 14.4131 14.6716Z" stroke="black" strokeWidth="1.25" strokeLinecap="round"/>
            </svg>  
            <span>Komentar</span>
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          <svg width="18" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.43043 10.3688L10.4897 13.3538M10.4823 5.11883L5.43043 8.10383M14.623 3.98633C14.623 5.22897 13.6281 6.23633 12.4008 6.23633C11.1735 6.23633 10.1786 5.22897 10.1786 3.98633C10.1786 2.74369 11.1735 1.73633 12.4008 1.73633C13.6281 1.73633 14.623 2.74369 14.623 3.98633ZM5.73412 9.23633C5.73412 10.479 4.73919 11.4863 3.51189 11.4863C2.2846 11.4863 1.28967 10.479 1.28967 9.23633C1.28967 7.99369 2.2846 6.98633 3.51189 6.98633C4.73919 6.98633 5.73412 7.99369 5.73412 9.23633ZM14.623 14.4863C14.623 15.729 13.6281 16.7363 12.4008 16.7363C11.1735 16.7363 10.1786 15.729 10.1786 14.4863C10.1786 13.2437 11.1735 12.2363 12.4008 12.2363C13.6281 12.2363 14.623 13.2437 14.623 14.4863Z" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            <span>Berbagi</span>
          </button>
        </div>
      </div>
    </div>
  );
}