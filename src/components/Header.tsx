import React from 'react';

interface HeaderProps {
  activeFilter?: string;
}

const Header: React.FC<HeaderProps> = ({ activeFilter = 'Matched' }) => {
  const filterTabs = [
    { name: 'Matched', active: activeFilter === 'Matched' },
    { name: 'Liked', count: 1, active: activeFilter === 'Liked' },
    { name: 'Applied', count: 1, active: activeFilter === 'Applied' },
  ];

  return (
    <div className="bg-white fixed top-0 left-64 right-0 z-50 shadow-sm border-b border-gray-200">
      <div className="px-6 py-7">
        <div className="flex items-center justify-between">
          {/* Filter Tabs */}
          <div className="flex space-x-4">
            {filterTabs.map(tab => (
              <button
                key={tab.name}
                className={`flex items-center space-x-2 px-7 py-2 rounded-full text-xl font-medium transition-colors ${
                  tab.active
                    ? 'text-textPrimary border-2 border-purple'
                    : 'text-textSecondary hover:bg-gray-100'
                }`}
              >
                <span>{tab.name}</span>
                {tab.count && (
                  <span className="bg-green text-textPrimary text-xs rounded-full px-2 py-0.5 min-w-[18px] h-5 flex items-center justify-center">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
