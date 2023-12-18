import React from "react";
import Card from "../CardComponent/Card";
import "./FlashCards.css"
import GradientText from "../GradientTextComponent/GradientText";

export default function FlashCards(){

    const descs = [{
        icon: "fa-solid fa-user-tie",
        title: "Professionalità",
        desc: "Porto sempre a termine i miei compiti e nutro rispetto nei confronti di chi ha più esperienza di me."
    }, {
        icon: "fa-solid fa-people-group",
        title: "Lavoro di gruppo",
        desc: "Grazie alla mia università e ai vari progetti eseguiti, ho sviluppato ottime capacità comunicative, ampliate anche grazie alla mia affinità con l'inglese (C1)."
    }, {
        icon: "fa-solid fa-book",
        title: "Informazione",
        desc: "Sono sempre pronto a mettermi in gioco per imparare cose nuove e allargare i miei orizzonti."
    }, {
        icon: "fa-solid fa-code",
        title: "Coding",
        desc: "Ho una discreta esperienza nella programmazione dovuta ai vari anni di studio e ai vari progetti a cui ho partecipato."
    }]

    return(
        <section className="flash-cards-container">
            <GradientText value="Perchè scegliere me?" size="1.5"/>
            <div className={"flash-cards"}>
                {
                    descs.map((item) => {
                        return (
                            <Card
                                key={item.title}
                                icon={item.icon}
                                desc={item.desc}
                                title={item.title}
                            />
                        )
                    })
                }
            < /div>
        </section>
    );
}