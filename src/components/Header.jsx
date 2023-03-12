import React from "react";
import '../components/css/header.css';

function Header(props){
    return(
        <div className="main-control">
           <div className="logo-area">
                <h1>TotalEnergies</h1>
           </div>
            
           <div className="btn-controll">
                <div className="btn-1">
                    {/* <button>Click me</button> */}
                    {/* <button>Click me</button> */}
                    {/* <button>Click me</button> */}
                </div>
                <div className="btn-2">
                    <button>Click me</button>
                    <button>Click me</button>
                    <button>Click me</button>
                </div>
           </div>
           
        </div>
    );
}

export default Header;