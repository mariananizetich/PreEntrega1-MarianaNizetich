import React, { Component } from 'react'
import disc from "./Disc.png"
import "./Brand.css"


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