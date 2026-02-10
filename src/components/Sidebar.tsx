import React from 'react';
import Logo from './Icons/Logo';
import {
  JobsIcon,
  AiMockInterviewIcon,
  ResumeIcon,
  ProfileIcon,
  SettingsIcon,
  SubscriptionIcon,
  ExtraCreditsIcon,
} from './Icons/Sidebar-icons';

interface SidebarProps {
  activeTab?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab = 'Jobs' }) => {
  const menuItems = [
    { name: 'Jobs', icon: <JobsIcon />, active: activeTab === 'Jobs' },
    {
      name: 'AI Mock Interview',
      icon: <AiMockInterviewIcon />,
      active: activeTab === 'AI Mock Interview',
    },
    { name: 'Resume', icon: <ResumeIcon />, active: activeTab === 'Resume' },
    { name: 'Profile', icon: <ProfileIcon />, active: activeTab === 'Profile' },
    {
      name: 'Setting',
      icon: <SettingsIcon />,
      active: activeTab === 'Setting',
    },
    {
      name: 'Subscription',
      icon: <SubscriptionIcon />,
      active: activeTab === 'Subscription',
    },
    {
      name: 'Extra Credits',
      icon: <ExtraCreditsIcon />,
      active: activeTab === 'Extra Credits',
    },
  ];

  return (
    <div className="w-64 bg-white min-h-screen flex flex-col fixed left-0 top-0 z-40 shadow-lg border-r border-gray-200">
      {/* Logo */}
      <div className="p-4">
        <Logo />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.name}>
              <button
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-full text-left transition-colors font-medium text-lg leading-6 tracking-tight ${
                  item.active
                    ? 'bg-purple text-white border-2 border-purple'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade Section */}
      <div className="p-4">
        <div className="bg-purple rounded-2xl p-6 text-white">
          <h3 className="font-semibold text-lg mb-2">Upgrade Your Plan</h3>
          <p className="text-sm opacity-90 mb-6">
            Boost your success rate now!
          </p>
          <button className="w-full bg-white text-purple rounded-full py-3 px-4 font-semibold text-base hover:bg-gray-50 transition-colors">
            Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
