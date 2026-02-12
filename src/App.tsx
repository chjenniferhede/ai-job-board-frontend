import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MockInterviewPanel from './components/MockInterviewPanel';
import './App.css';

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

function App() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Header />
        <div className="flex flex-1 bg-gray-50 mt-[73px] overflow-hidden">
          <MainContent selectedJob={selectedJob} onSelectJob={setSelectedJob} />
          <MockInterviewPanel jobId={selectedJob?.id} />
        </div>
      </div>
    </div>
  );
}

export default App;
