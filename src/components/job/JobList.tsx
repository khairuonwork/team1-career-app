import React from 'react';
import JobCard from './JobCard';

export const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    provider: 'PLN',
    providerType : 'Perusahaan Mitra',
    level: 'Paruh Waktu',
    price: 'Rp2-8jt',
    image: '/pln.svg',
    tags: ['Python', 'Minimal Sarjana S1'],
    address: 'Jalan Trunojoyo Blok M ...',
    postedDate: '7 hari yang lalu'
  },
  {
    id: 2,
    title: 'Software Engineer',
    provider: 'PLN',
    providerType : 'Perusahaan Mitra',
    level: 'Paruh Waktu',
    price: 'Rp2-8jt',
    image: '/pln.svg',
    tags: ['Python', 'Minimal Sarjana S1'],
    address: 'Jalan Trunojoyo Blok M ...',
    postedDate: '7 hari yang lalu'
  },
  {
    id: 3,
    title: 'Software Engineer',
    provider: 'PLN',
    providerType : 'Perusahaan Mitra',
    level: 'Paruh Waktu',
    price: 'Rp2-8jt',
    image: '/pln.svg',
    tags: ['Python', 'Minimal Sarjana S1'],
    address: 'Jalan Trunojoyo Blok M ...',
    postedDate: '7 hari yang lalu'
  },
  {
    id: 4,
    title: 'Software Engineer',
    provider: 'PLN',
    providerType : 'Perusahaan Mitra',
    level: 'Paruh Waktu',
    price: 'Rp2-8jt',
    image: '/pln.svg',
    tags: ['Python', 'Minimal Sarjana S1'],
    address: 'Jalan Trunojoyo Blok M ...',
    postedDate: '7 hari yang lalu'
  }
];
const JobList = () => {
  // Sample training data

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;