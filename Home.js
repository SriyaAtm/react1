import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        
            
            <ul>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        
    )

}
export default Home;