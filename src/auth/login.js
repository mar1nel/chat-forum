import React from "react";
import "./login.scss";

function Login() {
    return (
    <>
        <h1>LOGIN</h1>

        <div>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Sign Up</button>
        </form>
        </div>
    </>
    );
};

export default Login;
