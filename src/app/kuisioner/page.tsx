"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KuisionerPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the first question
    router.push('/kuisioner/1');
  }, [router]);
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>Mengarahkan ke kuisioner...</p>
      </div>
    </div>
  );
}