import React from "react";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import "./App.css"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";


export default function App() {
  return (
      <Router>
          <main>
              <Navbar/>
              <Divider/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
              <Divider/>
              <Footer/>
          </main>
      </Router>

  );
}
