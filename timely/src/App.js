import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddtoCart from "./pages/AddtoCart";
import StarRating from "./pages/StarRating";
import ProductDes from "./pages/ProductDes";
import ContactPage from "./pages/ContactPage";
import CreateProduct from "./pages/Admin/CreateProduct";
import Dashboard from "./pages/Admin/DashBoard";
import CreateOrder from "./pages/Admin/CreateOrder";
import ProtectedRoute from "./Components/routes/ProtectedRoutes";
import PublicRoute from "./Components/routes/PublicRoutes"
import Success from "./pages/Success";
// import DashBoard from './pages/DashBoard';
// Import other pages/components as needed

function App() {
  return (
    <Router>
      <>
        {/* Your header or navigation can go here if needed */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/addtocart"
            element={
              <ProtectedRoute>
                <AddtoCart />
              </ProtectedRoute>
            }
          />

          <Route path="/star" element={<StarRating />} />
          <Route
            path="/productdes/:params"
            element={
              <ProtectedRoute>
                <ProductDes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        {/* You can add a "not found" route at the end */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* Your footer can go here if needed */}
      </>
    </Router>
  );
}

export default App;
