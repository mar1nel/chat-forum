import React from "react";
import {Link} from "react-router-dom";

function Signup() {
    return (
        <>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Sign Up</button>
            </form>

            <button>
                <Link to="home">Go home</Link>
            </button>
        </>
);
};

export default Signup;
