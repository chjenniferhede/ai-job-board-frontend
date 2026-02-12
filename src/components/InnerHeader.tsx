import React from 'react';
import { LoadIcon, MatchIcon } from './Icons/Content-icons';
import {
  HeartIcon,
  ShareIcon,
  BackArrowIcon,
  ApplyArrowIcon,
} from './Icons/Card-icons';

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

interface InnerHeaderProps {
  selectedJob?: Job | null;
  onBack?: () => void;
}

const InnerHeader: React.FC<InnerHeaderProps> = ({ selectedJob, onBack }) => {
  if (selectedJob) {
    return (
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-colors shadow-sm"
            aria-label="Back to jobs"
          >
            <BackArrowIcon
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
            />
          </button>
          <span className="bg-purple text-white px-5 py-2 rounded-full text-sm font-semibold">
            {selectedJob.applicants}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            aria-label="Share"
          >
            <ShareIcon className="w-6 h-6" stroke="currentColor" />
          </button>
          <button
            className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
              selectedJob.liked ? 'text-purple' : 'text-gray-500'
            }`}
            aria-label="Like"
          >
            <HeartIcon
              className="w-6 h-6"
              fill={selectedJob.liked ? 'currentColor' : 'none'}
              stroke="currentColor"
            />
          </button>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2 shrink-on-hover">
            <span>Apply Now</span>
            <ApplyArrowIcon
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center w-full space-x-4 mb-6">
      <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple text-white rounded-full hover:bg-purpleSecondary transition-colors w-4/5 font-medium text-lg leading-6 tracking-tight">
        <span>
          <LoadIcon />
        </span>
        <span>Change Job Reference</span>
      </button>

      <button className="flex items-center justify-center space-x-2 px-1 py-3 bg-white text-gray-600 shadow-md rounded-full hover:bg-gray-50 transition-colors w-1/5 font-medium text-lg leading-6 tracking-tight">
        <span>
          <MatchIcon />
        </span>
        <span>Top matched</span>
      </button>
    </div>
  );
};

export default InnerHeader;
