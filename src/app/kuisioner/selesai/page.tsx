"use client";

import Link from 'next/link';

export default function KuisionerSelesai() {
  // In a real app, you would fetch this data from an API or state management
  const userData = {
    name: "John Doe",
    interests: [
      { icon: "🔍", text: "Menganalisis data dan menemukan pola tersembunyi" },
      { icon: "📊", text: "Menyusun informasi menjadi insight yang bermakna" },
      { icon: "📈", text: "Menggunakan angka untuk membuat keputusan yang lebih baik" }
    ],
    recommendedJobs: [
      "Data Analyst",
      "Business Intelligence Specialist",
      "Market Researcher"
    ]
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex flex-col w-full">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Hai, {userData.name}!</h1>
            <p className="text-lg">
              Kami telah menganalisis jawabanmu, dan inilah gambaran minat serta kekuatan kamu berdasarkan hasil kuisioner. Yuk, 
              lihat potensi dan peluang yang bisa kamu eksplorasi!
            </p>
          </div>

          {/* Minat Utama Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="mr-3">📌</span> Minat Utama Kamu
            </h2>
            
            <div className="flex flex-col gap-4">
              {userData.interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="bg-[#4882B4] text-white py-3 px-5 rounded-full flex items-center w-fit"
                >
                  <span className="mr-3">{interest.icon}</span>
                  <span>{interest.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pekerjaan Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="mr-3">🧩</span> Pekerjaan yang Cocok Buat Kamu
            </h2>
            
            <div className="flex flex-wrap gap-4">
              {userData.recommendedJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-[#4882B4] text-white py-3 px-6 rounded-full"
                >
                  {job}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link 
              href="/lamar-sekarang" 
              className="w-full bg-white border-2 border-[#4882B4] text-[#4882B4] py-4 px-6 rounded-full flex items-center justify-center hover:bg-gray-50 transition text-lg font-medium"
            >
              Lamar sekarang
              <svg className="ml-2" width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 20.4394L16.8896 16.0499C18.2925 14.6469 18.994 13.9454 18.994 13.0737C18.994 12.202 18.2925 11.5005 16.8896 10.0975L12.5 5.70802" stroke="#4882B4" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.13455 13.0735H18.3928" stroke="#4882B4" strokeWidth="2.08333" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}