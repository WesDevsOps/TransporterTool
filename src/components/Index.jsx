import React from "react";
import Login from "./Login";
import WelcomeIndex from "./WelcomeIndex";
import './css/index.css'

function Index(props){
    return(
        <div className="index-control">
            <div className="text-area">
                <WelcomeIndex />
            </div>
            <div className="login-controll">
                <Login />
            </div>
        </div>
    );
}

export default Index;