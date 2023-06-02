import image1 from "./images/image1.png";
import React from 'react';
import "./auth.scss";
import Login from "./login";
import { useState } from "react";
import Signup from "./signup";

function Auth() {

    const [active, setActive ] = useState("login");
    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login")
    }

    return(
        <div className="auth">
            <div className="authLeft">
                <img style={{display: ""}} src={image1} alt=""/>
            </div>
            <div className="authRight">
                {active === "login" ? (<Login/>) : (<Signup/>)}
            </div>
            <div className="authMore">
                {active === "login" ?
                    (<>Dont have an account? <button style={{maxWidth: "100px",}} onClick={handleChange}>Sign Up</button></>) :
                    (<>Have an account? <button onClick={handleChange} style={{maxWidth: "100px",}}>Log In</button></>)}
                <span>

                </span>
            </div>
        </div>
    )
}

export default Auth;