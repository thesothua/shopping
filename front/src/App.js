// import logo from './logo.svg';
// import './App.css';

import Header from "./user/Header";
import LatestProduct from "./user/LatestProduct";
import Slide from "./user/Slide";
import Navbar from "./user/Navbar";
import Login from "./user/Login";
import Product from "./user/Product";

import AdminProduct from "./admin/Product";
import AdminIndex from "./admin/Index";

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./user/Register";
import UserProfile from "./user/UserProfile";
import Footer from "./user/Footer";
import MiniDrawer from "./admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Slide />
              <LatestProduct />
              <Product />
              <Footer />
            </>
          }
        />

        <Route path="/admin" element={<MiniDrawer page={"index"} />} />
        <Route
          path="/admin/product"
          element={<AdminProduct page={"product"} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
