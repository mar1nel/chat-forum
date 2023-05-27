import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import Signup from "./auth/signup";
import Login from "./auth/login";
import Home from "./pages/home";
import Auth from "./auth/auth";
import React from 'react';
import App from './App';
import './index.css';

const router = createBrowserRouter([
    { path: "/", element: <Auth/> },
    // { path: "/home", element: <Home/> },
    // { path: "/login", element: <Login/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
