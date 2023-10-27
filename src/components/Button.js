import React from "react";
import "./Button.css"

export default function Button(){
    return(
        <div className="mail-button-wrapper">
            <a href="mailto:mauropio.altamura@outlook.it">
                <span>Contattatemi</span>
                <i className="fa-regular fa-envelope"></i>
            </a>
        </div>
    );
}
