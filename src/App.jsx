import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/graphs" element={<Dashboard />} />
            <Route path="/texts" element={<Dashboard />} />
            <Route path="/email" element={<Dashboard />} />
            <Route path="/phone-call" element={<Dashboard />} />
            <Route path="/online-chat" element={<Dashboard />} />
            <Route path="/created" element={<Dashboard />} />
            <Route path="/open" element={<Dashboard />} />
            <Route path="/responded" element={<Dashboard />} />
            <Route path="/solved" element={<Dashboard />} />
            <Route path="/other" element={<Dashboard />} />
            <Route path="/deleted" element={<Dashboard />} />
            <Route path="/download-report" element={<Dashboard />} />
            <Route path="/download" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
