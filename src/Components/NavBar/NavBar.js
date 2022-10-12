import './NavBar.css';
import {NavLink } from 'react-router-dom';

import Widget from './CartWidget';


const Navbar = () => {
   
    return (
        <header>
            <nav className="nav">
        <ul className='lista'>
            <li>
            <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
            <NavLink to={"/category/CharlyGarcia"}>CHARLY GARCÍA</NavLink>
            </li>
            <li>
            <NavLink to={"/category/PinkFloyd"}>PINK FLOYD</NavLink>
            </li>
            <li>
            <NavLink to={"/contacto"}>CONTACTO</NavLink>
            </li>
            <li>
            <NavLink to={"/carrito"}><Widget /></NavLink>
            </li>
        </ul>
    </nav>
        </header>
            
    
            
        
    )
}

export default Navbar