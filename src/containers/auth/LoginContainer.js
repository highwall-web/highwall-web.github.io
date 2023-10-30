import React, {useState} from 'react'
import "./LoginContainer.css"
import CloseButton from "../../components/CloseButton";
import GradientText from "../../components/GradientText";
import Button from "../../components/Button";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from '../../firebase.js';

function LoginContainer({openLogin, isAdmin, setIsAdmin, setIsLogged, isLogged}) {

    const ADMIN_MAIL = "mauropio.altamura@outlook.it";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Gestisce il login tramite firebase
    function onLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                openLogin(false);
                setIsLogged(true);
                if (user.email === ADMIN_MAIL) {
                    setIsAdmin(true);
                }
            })
            .catch((error) => {
                console.error("Impossibile effettare il login", error.message);
            });
    }

    //Gestisce il logout
    function onLogout() {
        signOut(auth).then(() => {
            openLogin(false);
            setIsLogged(false);
            if (isAdmin) {
                setIsAdmin(false);
            }
        })
    }

    return (
        <div className="modal-background">
            <div className="modal">
                <div className="close-btn-container">
                    <CloseButton openModal={openLogin}/>
                </div>
                {!isLogged ? (
                    <form className="login-form">
                        <GradientText value="ACCESSO ADMIN" size="1"/>
                        <input className={"general-input"}
                               id={"email"}
                               name={"email"}
                               type={"email"}
                               placeholder={"Mail"}
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}
                               required/>
                        <input className={"general-input"}
                               id={"password"}
                               name={"password"}
                               type={"password"}
                               placeholder={"Password"}
                               onChange={(e) => {
                                   setPassword(e.target.value)
                               }}
                               required/>
                        <div className={"button-container"}>
                            <Button value="Login" width="5" height="3" handleClick={onLogin}/>
                        </div>
                    </form>
                ) : (
                    <div className={"button-container"}>
                        <Button value="Logout" width="5" height="3" handleClick={onLogout}/>
                    </div>
                )

                }

            </div>
        </div>
    )
}

export default LoginContainer
