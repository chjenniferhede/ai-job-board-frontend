import React from 'react';
import { LocationIcon, RobotIcon } from './Icons/Content-icons';
import EclipseIcon from './Icons/Eclipse';
import MatchDoughnut from './Helper/MatchDoughnut';
import Tags from './Helper/Tags';
import { HorizontalDivider } from './Helper/Divider';

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
  required?: string[];
  preferred?: string[];
  responsibilities?: string[];
  benefits?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  companyInfo?: {
    name: string;
    founded: string;
    location: string;
    employees: string;
    website: string;
    description: string;
  };
  liked: boolean;
  applied: boolean;
}

interface JobDetailProps {
  job: Job;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm w-full relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-20 pointer-events-none">
        <EclipseIcon className="w-[600px] h-auto" />
      </div>

      {/* Main Content Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-start space-x-6">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-4xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            G
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 mb-1 rounded-full text-sm font-medium">
                {job.postedTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {job.title}
            </h1>
            <p className="text-lg text-gray-500 mb-3">{job.company}</p>
            <div className="flex items-center space-x-4 text-base text-gray-500">
              <span className="flex items-center space-x-1">
                <LocationIcon className="w-4 h-4" />
                <span>{job.location}</span>
              </span>
              <span className="text-purple">•</span>
              <span>3 days ago</span>
              <span className="text-purple">•</span>
              <span className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                <span>{job.remote}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <MatchDoughnut percent={job.match} size={120} strokeWidth={8} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-2xl font-bold text-gray-900">{job.match}%</div>
            <div className="text-sm text-gray-500 font-medium">Match</div>
          </div>
        </div>
      </div>

      {/* Secondary Details Grid */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <LocationIcon className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-sm text-gray-600">United States</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600">{job.type}</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600">{job.remote}</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600">{job.experience}</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600">{job.salary}</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600">Mid Level</div>
        </div>
      </div>

      {/* Description Section */}
      <HorizontalDivider className="mb-6" color="#E5E7EB" thickness={1} />
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed text-base">
          {job.description}
        </p>
      </div>
      <HorizontalDivider className="mb-6" color="#E5E7EB" thickness={1} />

      {/* AI Interview CTA Box */}
      <div className="bg-green rounded-3xl p-8 mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <RobotIcon className="w-8 h-8 text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Maximize your interview success
            </h2>
          </div>
          <p className="text-gray-800 mb-8 max-w-2xl leading-relaxed">
            Our platform simulates real interview scenarios, helping you refine
            your responses and boost your confidence.
          </p>
          <HorizontalDivider className="mb-4" color="#000" thickness={1} />

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                Job-Specific Simulations:
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Practice with questions tailored to your target role, ensuring
                relevance and preparation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                Actionable Feedback
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Get detailed analysis of your responses and practical,
                step-by-step improvement suggestions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                Boost Success Rates:
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Perfect your interview skills and increase your chances of
                landing the job you want.
              </p>
              <div className="flex justify-end">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Start Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Qualification</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Discover how your skills align with the requirements of this position.
          Below is a detailed list of the essential skills needed for the role.
        </p>
        <div className="flex flex-wrap gap-2">
          <Tags tags={job.skills} />
        </div>
      </div>

      {/* Required Section */}
      {job.required && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Required</h3>
          <ul className="space-y-4">
            {job.required.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Preferred Section */}
      {job.preferred && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Preferred</h3>
          <ul className="space-y-4">
            {job.preferred.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsibilities Section */}
      {job.responsibilities && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Responsibilities
          </h3>
          <ul className="space-y-4">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits Section */}
      {job.benefits && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Benefits</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We believe happy team members create amazing work. Here's what we
            offer to make that happen:
          </p>
          <div className="grid grid-cols-2 gap-6">
            {job.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <span className="font-bold text-gray-900">
                    {benefit.title}
                  </span>
                  <span className="text-gray-700 ml-1">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <HorizontalDivider className="mb-8" color="#5E5E5E" />

      {/* Company Section */}
      {job.companyInfo && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Company</h3>
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {job.companyInfo.name}
              </h4>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1M8 7h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                    />
                  </svg>
                  <span>{job.companyInfo.founded}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <LocationIcon className="w-4 h-4" />
                  <span>{job.companyInfo.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>{job.companyInfo.employees}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span>{job.companyInfo.website}</span>
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-900 rounded">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="p-2 bg-blue-600 rounded">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {job.companyInfo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
