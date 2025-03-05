import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Transactions from './pages/Transactions';
import Goals from './pages/Goals';
import Investments from './pages/Investments';
import BillsAndPayments from './pages/BillsAndPayments';
import AnalyticsAndReport from './pages/AnalyticsAndReport';
import Help from './pages/Help';
import Integration from './pages/Integration'
import Settings from './pages/Settings'


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/BillsAndPayments" element={<BillsAndPayments />} />
      <Route path="AnalyticsAndReport" element={<AnalyticsAndReport />} />
      <Route path="Help" element={<Help/>} />
      <Route path="Integration" element={<Integration/>} />
      <Route path="Settings" element={<Settings/>} />
    </Routes>
  </Router>
);

export default App;
