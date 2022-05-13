import React  from "react";
import { ReactDOM } from "react";
import './MenuBar.css';
const MenuBar=()=>{
        return(
            <div className="Menu-Container">
                <nav className="nav_bar clearfix">
                    <div className="left">
                        <p className="Logo">Your logo</p>
                    </div>
                    <div className="right">
                        <ul>
                            <em><a href="/">Home</a></em>
                            <em><a href="/ContactUs">ContactUs</a></em>
                            <em><a href="/AboutUs">AboutUs</a></em>
                        </ul>
                    </div>
                </nav>
            </div>
            
        );
}

export default MenuBar;