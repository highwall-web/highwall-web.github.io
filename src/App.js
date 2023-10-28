import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import "./App.css"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginContainer from "./containers/auth/LoginContainer";


export default function App() {

    const [openLogin, setOpenLogin] = useState(false);

  return (
      <Router>
          <main>
              <Navbar openLogin={setOpenLogin}/>
              <Divider/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
              <Divider/>
              <Footer/>
          </main>
          {openLogin && <LoginContainer openLogin={setOpenLogin}/>}
      </Router>

  );
}
