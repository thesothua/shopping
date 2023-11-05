// import logo from './logo.svg';
// import './App.css';

import Header from "./user/Header";
import LatestProduct from "./user/LatestProduct";
import Slide from "./user/Slide";
import Navbar from "./user/Navbar";
import Login from "./user/Login";
import Product from "./user/Product";

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./user/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navbar />
            <Slide />
            <LatestProduct />
            <Product/>
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
