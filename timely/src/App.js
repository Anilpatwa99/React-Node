import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
// Import other pages/components as needed

function App() {
  return (
    <Router>
      <>
        {/* Your header or navigation can go here if needed */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* You can add a "not found" route at the end */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* Your footer can go here if needed */}
      </>
    </Router>
  );
}

export default App;
