import React from 'react'
import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
                <nav className="footer-content">
                    <a href="https://www.linkedin.com/in/mauro-pio-altamura-5b5b6027a" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="../../assets/CV-Mauro-Pio-Altamura.pdf" target="_blank" rel="noreferrer">CV</a>
                    <p className="rights">©{currentYear} All rights reserved.</p>
                    <p className={"icons"}>All icons used are from <a href={"https://icons8.com/"}>icons8.com</a></p>
                </nav>
        </footer>
    )
}
export default Footer
