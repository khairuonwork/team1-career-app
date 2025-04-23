import React from 'react';
import { useRouter } from "next/navigation";

const PersonalDetailsForm = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Detail Personal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Pekerjaan</label>
          <input 
            type="text" 
            placeholder="Pekerjaan yang kamu inginkan" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1 flex items-end">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-md flex items-center justify-center">
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5002 0.12793C19.2254 0.12793 17.0017 0.802485 15.1103 2.06629C13.2188 3.3301 11.7447 5.1264 10.8741 7.22804C10.0036 9.32968 9.77583 11.6423 10.2196 13.8733C10.6634 16.1044 11.7588 18.1538 13.3674 19.7623C14.9759 21.3709 17.0253 22.4663 19.2563 22.9101C21.4874 23.3539 23.8 23.1261 25.9017 22.2556C28.0033 21.385 29.7996 19.9109 31.0634 18.0194C32.3272 16.128 33.0018 13.9043 33.0018 11.6295C33.0018 8.57909 31.79 5.65363 29.633 3.49666C27.4761 1.3397 24.5506 0.12793 21.5002 0.12793ZM21.5002 18.5304C20.1353 18.5304 18.8011 18.1257 17.6662 17.3674C16.5314 16.6091 15.6469 15.5314 15.1246 14.2704C14.6022 13.0094 14.4656 11.6218 14.7318 10.2832C14.9981 8.94454 15.6554 7.71491 16.6205 6.7498C17.5856 5.78468 18.8152 5.12743 20.1539 4.86116C21.4925 4.59488 22.8801 4.73155 24.1411 5.25386C25.4021 5.77618 26.4798 6.66069 27.2381 7.79554C27.9964 8.9304 28.4011 10.2646 28.4011 11.6295C28.4011 13.4597 27.6741 15.215 26.3799 16.5092C25.0857 17.8034 23.3304 18.5304 21.5002 18.5304ZM42.203 43.8339V41.5336C42.203 37.263 40.5065 33.1674 37.4868 30.1476C34.467 27.1279 30.3714 25.4314 26.1008 25.4314H16.8996C12.629 25.4314 8.53334 27.1279 5.51359 30.1476C2.49384 33.1674 0.797363 37.263 0.797363 41.5336V43.8339H5.39799V41.5336C5.39799 38.4832 6.60976 35.5577 8.76672 33.4007C10.9237 31.2438 13.8492 30.032 16.8996 30.032H26.1008C29.1512 30.032 32.0767 31.2438 34.2337 33.4007C36.3906 35.5577 37.6024 38.4832 37.6024 41.5336V43.8339H42.203Z" fill="#3582C5"/>
              </svg>
            </div>
            <button className="text-[#3582C5] font-medium">Upload fotomu</button>
          </div>
        </div>
        
        {/* Rest of the form fields remain unchanged */}
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Nama Panggilan</label>
          <input 
            type="text" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Nama Lengkap</label>
          <input 
            type="text" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Nomor Telepon</label>
          <input 
            type="tel" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-gray-600 mb-2">Alamat</label>
          <textarea 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-24"
          ></textarea>
        </div>
        
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Kota/Provinsi</label>
          <input 
            type="text" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Negara</label>
          <input 
            type="text" 
            className="w-full p-3 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button onClick={()=>router.push('/cvmaker/step4')} className="bg-[#3785C6] text-white px-6 py-3 rounded-md">
          Selanjutnya: Riwayat Pekerjaan
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;