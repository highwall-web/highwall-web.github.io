import React from "react";
import Card from "../CardComponent/Card";
import "./FlashCards.css"
import GradientText from "../GradientTextComponent/GradientText";

export default function FlashCards(){
    return(
        <section className="flash-cards-container">
            <GradientText value = "Perchè scegliere me?" size = "1.5"/>
            <div className="flash-cards">
                <Card icon = "fa-solid fa-user-tie"
                      title = "Professionalità"
                      desc = "Porto sempre a termine i miei compiti e nutro rispetto nei confronti di chi ha più esperienza di me."/>
                <Card icon = "fa-solid fa-people-group"
                      title = "Lavoro di gruppo"
                      desc = "Grazie alla mia università e ai vari progetti eseguiti, ho sviluppato ottime capacità comunicative, ampliate anche grazie alla mia affinità con l'inglese (C1)."/>
                <Card icon = "fa-solid fa-book"
                      title = "Informazione"
                      desc = "Sono sempre pronto a mettermi in gioco per imparare cose nuove e allargare i miei orizzonti."/>
                <Card icon = "fa-solid fa-code"
                      title = "Programmazione"
                      desc = "Ho una discreta esperienza nella programmazione dovuta ai vari anni di studio e ai vari progetti a cui ho partecipato."/>
            </div>

        </section>
    );
}