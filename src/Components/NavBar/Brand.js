import React, { Component } from 'react';
import disc from "./disc.png";
import './NavBar.css';


class Brand extends Component {
    render (){
        return(
            <div className='brand'>
                <img src={disc} alt="vinilo"/>
            </div>
        )
    }
}

export default Brand