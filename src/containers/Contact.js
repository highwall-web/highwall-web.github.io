import React from "react";
import "./Contact.css";
import Button from "../components/Button";

export default function Contact(){
    return(
        <section className="contacts">
            <h2 className="gradient">Avete intenzione di assumermi?</h2>
            <div className="mail-container">
                <Button/>
            </div>
        </section>
    );
}