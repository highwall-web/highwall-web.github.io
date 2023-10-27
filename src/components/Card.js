import React from "react";
import "./Card.css"

export default function Card(props){
    return(
        <div className="flash-card">
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}