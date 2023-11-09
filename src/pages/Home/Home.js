import React from 'react'
import "./Home.css"
import About from "../../components/AboutComponent/About";
import Knowledge from "../../components/KnowledgeComponent/Knowledge";
import Divider from "../../components/DividerComponent/Divider";
import FlashCards from "../../components/FlashCardComponent/FlashCards";
import Contact from "../../components/ContactComponent/Contact";

const Home = ({isAdmin, isAddingBadge, setDoc, doc, setBadge, badge, isEditingBadge}) => {
    return (
        <div>
            <About/>
            <Divider/>
            <Knowledge isAddingBadge={isAddingBadge} setDoc={setDoc} doc={doc} isAdmin={isAdmin} setBadge={setBadge}
                       badge={badge} isEditingBadge={isEditingBadge}/>
            <Divider/>
            <FlashCards/>
            <Divider/>
            <Contact/>
        </div>
    )
}
export default Home
