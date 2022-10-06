import './NavBar.css';
import {NavLink } from 'react-router-dom';

import Widget from './CartWidget';


const Navbar = () => {
   
    return (
        <header>
            <nav className="nav">
        <ul className='lista'>
            <li>
            <NavLink to={"/HOME"}>HOME</NavLink>
            </li>
            <li>
            <NavLink to={"/ARTÍCULOS"}>ARTÍCULOS</NavLink>
            </li>
            <li>
            CONTACTO
            </li>
            <li>
            <Widget /> 
            </li>
        </ul>
    </nav>
        </header>
            
    
            
        
    )
}

export default Navbar