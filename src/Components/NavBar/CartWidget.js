import React, { Component } from 'react'
import widget from "./widget.png"
import "./Widget.css"

class Widget extends Component {
    render (){
        return(
            <div className='carrito'>
                <img src={widget}/>
            </div>
        )
    }
}

export default Widget