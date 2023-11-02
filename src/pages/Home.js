import React from 'react'
import "./Home.css"
import About from "../components/AboutComponent/About";
import Knowledge from "../containers/KnowledgeContainer/Knowledge";
import Divider from "../components/DividerComponent/Divider";
import FlashCards from "../containers/FlashCardContainer/FlashCards";
import Contact from "../containers/ContactContainer/Contact";

const Home = ({isAdmin, isAddingBadge, setDoc, doc}) => {
    return (
        <div>
            <About/>
            <Divider/>
            <Knowledge isAddingBadge={isAddingBadge} setDoc={setDoc} doc={doc} isAdmin={isAdmin}/>
            <Divider/>
            <FlashCards/>
            <Divider/>
            <Contact/>
        </div>
    )
}
export default Home
