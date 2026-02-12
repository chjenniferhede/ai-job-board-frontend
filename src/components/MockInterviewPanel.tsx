import React from 'react';
import SvgEclipse from './Images/Eclipse';
import aiGeneratedData from '../data/ai-generated.json';

interface MatchBreakdown {
  category: string;
  percentage: number;
  color: string;
}

interface Analysis {
  title: string;
  status: 'match' | 'partial';
  icon: string;
  description: string;
}

interface AIAnalysis {
  id: number;
  jobId: number;
  title: string;
  matchBreakdown: MatchBreakdown[];
  analysis: Analysis[];
  generatedAt: string;
  confidenceScore: number;
}

interface MockInterviewPanelProps {
  jobId?: number;
}

const MockInterviewPanel: React.FC<MockInterviewPanelProps> = ({ jobId }) => {
  // Find AI analysis data for the selected job
  const analysisData = jobId
    ? (aiGeneratedData.find((item) => item.jobId === jobId) as
        | AIAnalysis
        | undefined)
    : undefined;

  const getStatusIcon = (status: string) => {
    if (status === 'match') {
      return (
        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-green-600 font-bold text-xs">✓</span>
        </div>
      );
    }
    return (
      <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-yellow-600 font-bold text-xs">⚠</span>
      </div>
    );
  };

  // If a job is selected and AI analysis exists, show the analysis
  if (analysisData) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 w-1/4 p-4 pt-14 relative">
        <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-70 z-10">
            <SvgEclipse aria-hidden className="w-full h-full object-cover" />
          </div>
          <div className="relative z-20">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {analysisData.title}
            </h2>

            {/* Match Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {analysisData.matchBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 flex flex-col items-center shadow-xs border border-gray-100"
                >
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#a78bfa"
                        strokeWidth="3"
                        strokeDasharray={`${(item.percentage / 100) * 176} 176`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-sm font-bold text-gray-900">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mb-6" />

            {/* Analysis Items */}
            <div className="space-y-5">
              {analysisData.analysis.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {getStatusIcon(item.status)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900 break-words">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default mock interview content when no job is selected
  return (
    <div className="bg-gray-100 w-1/4 p-4 pt-14 relative">
      <div className="bg-white rounded-2xl p-6 shadow-sm relative">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-70 z-10">
          <SvgEclipse aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20">
          <div className="space-y-6">
            {/* Main CTA */}
            <div className="text-center">
              <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ace Your Interviews with AI-Powered Mock Sessions!
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Struggling with interview nerves or unsure how to prepare? Let
                our cutting-edge AI mock interviews help you shine!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">
                Why Choose Our AI Mock Interviews? ⭐
              </h4>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">
                    Job-Specific Simulations:
                  </h5>
                  <ul className="text-sm text-gray-600 ml-4 space-y-1">
                    <li>
                      • Practice with questions tailored to your target role,
                      ensuring relevance and preparation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-1">
                    Actionable Feedback
                  </h5>
                  <ul className="text-sm text-gray-600 ml-4 space-y-1">
                    <li>
                      • Get detailed analysis of your responses and practical,
                      step-by-step improvement suggestions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-1">
                    Boost Success Rates:
                  </h5>
                  <ul className="text-sm text-gray-600 ml-4 space-y-1">
                    <li>
                      • Perfect your interview skills and increase your chances
                      of landing the job you want.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-6">
              <button className="w-full bg-gray-800 text-white rounded-full py-3 px-4 font-medium text-lg leading-6 tracking-tight hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2">
                <span>🎯</span>
                <span>Mock Interview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewPanel;
