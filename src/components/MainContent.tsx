import React, { useEffect, useRef } from 'react';
import JobCard from './JobCard';
import InnerHeader from './InnerHeader';
import JobDetail from './JobDetail';
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

interface MainContentProps {
  selectedJob: Job | null;
  onSelectJob: (job: Job | null) => void;
}

const MainContent: React.FC<MainContentProps> = ({ selectedJob, onSelectJob }) => {
  const jobs: Job[] = jobsData;
  const scrollRef = useRef<HTMLDivElement>(null);

  // When a job is selected, ensure the scrollable area resets to the top
  useEffect(() => {
    if (selectedJob && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [selectedJob]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 p-6 pt-14 pr-2 bg-gray-100 overflow-auto"
    >
      <div className="w-full">
        {/* Inner Header Controls */}
        <InnerHeader
          selectedJob={selectedJob}
          onBack={() => onSelectJob(null)}
        />

        {selectedJob ? (
          <JobDetail job={selectedJob} />
        ) : (
          <div className="space-y-4">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} onSelect={onSelectJob} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
