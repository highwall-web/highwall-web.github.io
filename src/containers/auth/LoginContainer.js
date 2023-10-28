import React from 'react'
import "./LoginContainer.css"
import CloseButton from "../../components/CloseButton";
import GradientText from "../../components/GradientText";
import Button from "../../components/Button";

function LoginContainer({openLogin}) {
    return (
        <div className="login-background">
            <div className="login-modal">
                <div className="close-btn-container">
                    <CloseButton openModal={openLogin}/>
                </div>
                <form className="login-form">
                    <GradientText value="ACCESSO ADMIN" size="1"/>
                    <input className={"general-input"} type="text" placeholder={"Username"}/>
                    <input className={"general-input"} type="password" placeholder={"Password"}/>
                    <div className={"button-container"}>
                        <Button value="Login" width="5" height="3"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginContainer
