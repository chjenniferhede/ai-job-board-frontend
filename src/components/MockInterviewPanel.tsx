import React from 'react';
import SvgAiBackground from './Images/AiBackground';
import SvgEclipse from './Images/Eclipse';

const MockInterviewPanel: React.FC = () => {
  return (
    <div className="w-1/4 p-4 relative">
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
