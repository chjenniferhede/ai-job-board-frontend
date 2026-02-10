import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MockInterviewPanel from './components/MockInterviewPanel';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <div className="flex flex-1 bg-gray-50 mt-[73px]">
          <MainContent />
          <MockInterviewPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
