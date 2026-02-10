import React from 'react';
import JobCard from './JobCard';
import InnerHeader from './InnerHeader';
import jobsData from '../data/jobs.json';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  match: number;
  skillsMatch: string;
  remote: string;
  postedTime: string;
  applicants: string;
  description: string;
  skills: string[];
  liked: boolean;
  applied: boolean;
}

const MainContent: React.FC = () => {
  const jobs: Job[] = jobsData;

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-auto">
      <div className="w-full">
        {/* Inner Header Controls */}
        <div className="mb-6">
          <InnerHeader />
        </div>

        <div className="space-y-4">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
