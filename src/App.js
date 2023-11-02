import React, {useState} from "react";
import Navbar from "./components/NavbarComopnent/Navbar";
import Divider from "./components/DividerComponent/Divider";
import "./App.css"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/FooterComponent/Footer";
import LoginContainer from "./containers/auth/LoginContainer";
import AddBadgeModal from "./containers/AddBadgeModalContainer/AddBadgeModal";


export default function App() {

    const [openLogin, setOpenLogin] = useState(false);
    const [openAddBadge, setOpenAddBadge] = useState(false);
    const [documents, setDocuments] = useState([]);

    const [isLogged, setIsLogged] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <Router>
            <main>
                <Navbar openLogin={setOpenLogin} isLogged={isLogged}/>
                <Divider/>
                <Routes>
                    <Route path="/"
                           element={<Home isAdmin={isAdmin} isAddingBadge={setOpenAddBadge} setDoc={setDocuments}
                                          doc={documents}/>}/>
                </Routes>
                <Divider/>
                <Footer/>
            </main>
            {openLogin &&
                <LoginContainer openLogin={setOpenLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLogged={isLogged}
                                setIsLogged={setIsLogged}/>}
            {openAddBadge &&
                <AddBadgeModal openAdd={setOpenAddBadge} setDoc={setDocuments}/>}

        </Router>

    );
}
