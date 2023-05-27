import React from "react";
import "./login.scss";

function Login() {
    return (
    <>
        <h1>LOGIN</h1>

        <div className="form">
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button>Log In</button>
        </form>
        </div>
    </>
    );
}

export default Login;
