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

    const [isLogged, setIsLogged] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

  return (
      <Router>
          <main>
              <Navbar openLogin={setOpenLogin} isLogged={isLogged}/>
              <Divider/>
              <Routes>
                  <Route path="/" element={<Home isAdmin={isAdmin}/>}/>
              </Routes>
              <Divider/>
              <Footer/>
          </main>
          {openLogin &&
              <LoginContainer openLogin={setOpenLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLogged={isLogged}
                              setIsLogged={setIsLogged}/>}
      </Router>

  );
}
