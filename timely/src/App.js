import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AddtoCart from './pages/AddtoCart';
import StarRating from './pages/StarRating';
import ProductDes from './pages/ProductDes';
import ContactPage from './pages/ContactPage';
import DashBoard from './pages/DashBoard';
// Import other pages/components as needed

function App() {
  return (
    <Router>
      <>
        {/* Your header or navigation can go here if needed */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/AddToCart" element={<AddtoCart />} />

          <Route path="/star" element={<StarRating />} />
          <Route path="/Product-Des" element={<ProductDes/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/dashboard" element={<DashBoard />} />

        </Routes>
        {/* You can add a "not found" route at the end */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* Your footer can go here if needed */}
      </>
    </Router>
  );
}

export default App;
