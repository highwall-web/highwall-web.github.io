import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import "./About.css"
import GradientText from "./GradientText";
export default function About(){
    return(
        <section className="about">
                <img src={profilePic} alt="Foto profilo" id="profile-pic"></img>
                <p id="description">Ciao, sono Mauro <span id="hand">&#128075;</span></p>
                <GradientText value ={["Pagine web, applicazioni,", <br/>, "design ed esperienza."]} size = "2"/>
        </section>
    );
}