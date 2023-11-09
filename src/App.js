import React, {useState} from "react";
import Navbar from "./components/NavbarComopnent/Navbar";
import Divider from "./components/DividerComponent/Divider";
import "./App.css"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/FooterComponent/Footer";
import LoginContainer from "./components/LoginComponent/LoginContainer";
import AddBadgeModal from "./components/AddBadgeModalComponent/AddBadgeModal";
import EditBadgeModal from "./components/EditBadgeModalComponent/EditBadgeModal";


export default function App() {

    const [openLogin, setOpenLogin] = useState(false);
    const [openAddBadge, setOpenAddBadge] = useState(false);
    const [openEditBadge, setOpenEditBadge] = useState(false);
    const [documents, setDocuments] = useState([]);

    const [isLogged, setIsLogged] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const [badge, setBadge] = useState({
        idDoc: '',
        name: '',
        image: '',
        percentage: 0,
    });

    return (
        <Router>
            <main>
                <Navbar openLogin={setOpenLogin} isLogged={isLogged}/>
                <Divider/>
                <Routes>
                    <Route path="/"
                           element={<Home isAdmin={isAdmin} isAddingBadge={setOpenAddBadge}
                                          isEditingBadge={setOpenEditBadge} setDoc={setDocuments}
                                          doc={documents} setBadge={setBadge} badge={badge}/>}/>
                </Routes>
                <Divider/>
                <Footer/>
            </main>
            {openLogin &&
                <LoginContainer
                    openLogin={setOpenLogin}
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                />
            }
            {openAddBadge &&
                <AddBadgeModal
                    openAdd={setOpenAddBadge}
                    setDocs={setDocuments}
                />
            }
            {openEditBadge &&
                <EditBadgeModal
                    badge={badge}
                    setOpenEdit={setOpenEditBadge}
                    setDocs={setDocuments}
                    docs={documents}
                />
            }


        </Router>

    );
}
