import React  from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import NumberIncDec from '../NumberIncDec.js';

const Home=()=>{
    return(
        <>
            <div className="Home-container">
                <h2>This is our homepage</h2>
                <p>Laborum do consequat velit aliquip aliquip elit. Consectetur elit duis incididunt occaecat do anim ut voluptate ullamco eiusmod ullamco. Id nulla aute irure incididunt voluptate tempor laborum Lorem nisi et. Proident adipisicing ipsum veniam cupidatat ad eu commodo.</p>
                {/* <NumberIncDec/> */}
            </div>
        </>        
    );
    
}

export default Home;