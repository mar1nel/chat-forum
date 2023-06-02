import Panel from "../components/panel";
import Send from "../components/send";
import React from "react";
import "./home.scss";

const Home = () => {
    return(
        <>
            <div className="comments">
            <Panel/>
            <Panel/>
            <Panel/>
            <Panel/>
            <Panel/>
            <Panel/>
            </div>
            <Send/>
        </>
    );
}

export default Home;