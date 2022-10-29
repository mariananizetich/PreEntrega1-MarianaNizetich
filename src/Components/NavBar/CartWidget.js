import React, { Component } from 'react';
import widget from "./widget.png";
import './NavBar.css';



class Widget extends Component {
    
    render (){
        
        return(
            <div className='carrito'>
                <img src={widget} alt="Carrito de compras"/>
            </div>
        )
    }
}

export default Widget
