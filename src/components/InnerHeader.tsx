import React from 'react';
import { LoadIcon, MatchIcon } from './Icons/Content-icons';

const InnerHeader: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-4">
      <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple text-white rounded-full hover:bg-purple transition-colors w-4/5 font-medium text-lg leading-6 tracking-tight">
        <span>
          <LoadIcon />
        </span>
        <span>Change Job Reference</span>
      </button>

      <button className="flex items-center justify-center space-x-2 px-1 py-3 bg-white text-gray-600 rounded-full hover:bg-gray-50 transition-colors w-1/5 font-medium text-lg leading-6 tracking-tight">
        <span>
          <MatchIcon />
        </span>
        <span>Top matched</span>
      </button>
    </div>
  );
};

export default InnerHeader;
