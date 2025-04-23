"use client";

import React from 'react';
import PostCard from '@/components/community/PostCard';
import PostInput from '@/components/community/PostInput';

export default function Komunitas() {
  const posts = [
    {
      id: 1,
      author: 'Alex Johnson',
      location: 'New York, NY',
      timeAgo: '3h ago',
      content: 'Looking for a skilled project manager for our upcoming project. Reach out if interested! #projectmanager',
      likes: 15,
      comments: 45,
      shares: 5,
      tags: ['Project Manager', 'Hiring']
    },
    {
      id: 2,
      author: 'Alex Johnson',
      location: 'New York, NY',
      timeAgo: '3h ago',
      content: 'Looking for a skilled project manager for our upcoming project. Reach out if interested! #projectmanager',
      likes: 15,
      comments: 45,
      shares: 5,
      tags: ['Project Manager', 'Hiring']
    }
  ];

  return (
    <main className="max-w-4xl mx-auto p-4">
      {/* Post creation input */}
      <PostInput />

      {/* Posts feed */}
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}