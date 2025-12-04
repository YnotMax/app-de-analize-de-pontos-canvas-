import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import EmployeeDashboard from './pages/EmployeeDashboard';
import TeamOverview from './pages/TeamOverview';
import AbsenceForensics from './pages/AbsenceForensics';
import ExecutiveOverview from './pages/ExecutiveOverview';
import ManagerQuickView from './pages/ManagerQuickView';
import CsvImport from './pages/CsvImport';
import TeamDetailedView from './pages/TeamDetailedView';
import TeamList from './pages/TeamList';
import TeamTrends from './pages/TeamTrends';
import PersonalTrends from './pages/PersonalTrends';
import PersonalScorecard from './pages/PersonalScorecard';
import PersonalDashboard from './pages/PersonalDashboard';
import WellbeingCheckin from './pages/WellbeingCheckin';
import CsvImportWizard from './pages/CsvImportWizard';
import HRAnalytics from './pages/HRAnalytics';
import TeamAnalytics from './pages/TeamAnalytics';
import EmployeeHistory from './pages/EmployeeHistory';
import AbsenceScorecard from './pages/AbsenceScorecard';
import AbsenceAnalysis from './pages/AbsenceAnalysis';
import DepartmentAnalysis from './pages/DepartmentAnalysis';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
          <Sidebar />
          <main className="flex-1 ml-20 p-8 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<EmployeeDashboard />} />
              <Route path="/team" element={<TeamOverview />} />
              <Route path="/team-list" element={<TeamList />} />
              <Route path="/team-trends" element={<TeamTrends />} />
              <Route path="/team-detailed" element={<TeamDetailedView />} />
              <Route path="/manager" element={<ManagerQuickView />} />
              <Route path="/executive" element={<ExecutiveOverview />} />
              <Route path="/forensics" element={<AbsenceForensics />} />
              <Route path="/personal-dashboard" element={<PersonalDashboard />} />
              <Route path="/personal-scorecard" element={<PersonalScorecard />} />
              <Route path="/personal-trends" element={<PersonalTrends />} />
              <Route path="/wellbeing" element={<WellbeingCheckin />} />
              <Route path="/import" element={<CsvImport />} />
              <Route path="/import-wizard" element={<CsvImportWizard />} />
              <Route path="/hr-analytics" element={<HRAnalytics />} />
              <Route path="/team-analytics" element={<TeamAnalytics />} />
              <Route path="/employee-history" element={<EmployeeHistory />} />
              <Route path="/absence-scorecard" element={<AbsenceScorecard />} />
              <Route path="/absence-analysis" element={<AbsenceAnalysis />} />
              <Route path="/department-analysis" element={<DepartmentAnalysis />} />
              <Route path="/calendar" element={<div className="p-8 text-slate-500">Calendar Module Coming Soon</div>} />
              <Route path="/reports" element={<div className="p-8 text-slate-500">Reports Module Coming Soon</div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
