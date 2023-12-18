import React from "react";
import "./Card.css"

export default function Card({icon, title, desc}) {
    return(
        <div className="flash-card">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}