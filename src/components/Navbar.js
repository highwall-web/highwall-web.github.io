import React from "react";
// images
import "./Navbar.css"
import logo from "../assets/logo-white.png"
import {Link} from "react-router-dom";

export default function Navbar({openLogin}) {

    return(
        <header>
            <div className="top-header-content">

                <Link to="/">
                    <img src={logo} alt="Logo Mauro" id="logo"/>
                </Link>
                <nav className="header-nav">
                    <a href="https://www.linkedin.com/in/mauro-pio-altamura-5b5b6027a" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="../assets/CV-Mauro-Pio-Altamura.pdf" target="_blank" rel="noreferrer">CV</a>
                    <button onClick={() => {
                        openLogin(true);
                    }}>Admin
                    </button>
                </nav>
            </div>
        </header>
    );
}