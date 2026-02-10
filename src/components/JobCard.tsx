import React from 'react';
import { LocationIcon } from './Icons/Content-icons';
import Tags from './Tags';
import { HeartIcon, ShareIcon } from './Icons/Card-icons';
import MatchDoughnut from './MatchDoughnut';

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

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getMatchColor = (match: number) => {
    if (match >= 90) return 'text-textPrimary border-green';
    if (match >= 80) return 'text-textPrimary border-green';
    if (match >= 60) return 'text-textPrimary border-orange';
    return 'text-orange border-orange';
  };

  const getMatchBgColor = (match: number) => {
    if (match >= 90) return 'bg-green/10';
    if (match >= 80) return 'bg-green/10';
    if (match >= 60) return 'bg-orange/10';
    return 'bg-orange/10';
  };

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow w-full">
      <div className="grid grid-cols-[1fr_4fr] gap-6 mb-6 items-start w-full">
        {/* Match Circle */}
        <div className="relative mx-auto">
          <MatchDoughnut percent={job.match} size={112} strokeWidth={10} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className={`text-2xl font-bold text-textPrimary`}>
              {job.match}%
            </div>
            <div className={`text-lg text-textPrimary`}>Match</div>
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-3xl font-semibold text-gray-900 pr-4">
              {job.title}
            </h3>
            <div className="flex items-center space-x-2">
              <button
                className={`p-1.5 rounded-full hover:bg-gray-100 transition-colors ${
                  job.liked ? 'text-purple' : 'text-gray-400'
                }`}
                aria-pressed={job.liked}
                aria-label={job.liked ? 'Unlike job' : 'Like job'}
              >
                <HeartIcon
                  className="w-5 h-5"
                  fill={job.liked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                />
              </button>
              <button
                className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
                aria-label="Share job"
              >
                <ShareIcon className="w-5 h-5" stroke="currentColor" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs">🏢</span>
            </div>
            <span className="text-gray-600 font-medium">{job.company}</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>
                <LocationIcon />
              </span>
              <span>{job.location}</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>•</span>
              <span>{job.remote}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="space-y-3 px-3">
        <div>
          <Tags
            tags={[job.type, job.skillsMatch, job.experience, job.salary]}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{job.postedTime}</span>
            <span>{job.applicants}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border-2 border-gray-300 text-textPrimary rounded-full hover:bg-gray-50 transition-colors font-medium text-lg leading-6 tracking-tight">
              Apply
            </button>
            <button className="px-4 py-2 bg-green text-textPrimary rounded-full hover:bg-green transition-colors font-medium text-lg leading-6 tracking-tight">
              {job.applied ? 'Applied' : 'Mock Interview'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
