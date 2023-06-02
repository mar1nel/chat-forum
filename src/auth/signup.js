import React, {useState, useRef} from "react";
import {useAuth} from "../context/authContext";

function Signup() {

    const emailRef = useRef()
    const passRef = useRef()
    const passConfRef = useRef()
    const {signup} = useAuth() //acum putem folosi as part of form

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        //verificam daca passu e the same

        if(passRef.current.value !== passConfRef){
            return setError('Password dont match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
            setLoading(false)
        // signup(emailRef.current.value, passRef.current.value)
    }

    return (
        <>
            <h1>SIGNUP</h1>

            <div>
                <div className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <button disabled={loading}>Sign Up</button>
                </div>
            </div>

            {/*<button>*/}
            {/*    <Link to="home">Go home</Link>*/}
            {/*</button>*/}

            {error}

        </>
);
}

export default Signup;
