import React from 'react'
import "./Home.css"
import About from "../components/About";
import Knowledge from "../containers/Knowledge";
import Divider from "../components/Divider";
import FlashCards from "../containers/FlashCards";
import Contact from "../containers/Contact";

const Home = ({isAdmin}) => {
    return (
        <div>
            <About/>
            {isAdmin && <Divider/>}
            {isAdmin && <Knowledge/>}
            <Divider/>
            <FlashCards/>
            <Divider/>
            <Contact/>
        </div>
    )
}
export default Home