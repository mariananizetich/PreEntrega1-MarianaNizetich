import React, { Component } from 'react';
import Disc from "./Disc.png";
import './NavBar.css';


class Brand extends Component {
    render (){
        return(
            <div className='brand'>
                <img src={Disc} alt="vinilo"/>
            </div>
        )
    }
}

export default Brand