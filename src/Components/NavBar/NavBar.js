import './NavBar.css';
import {NavLink } from 'react-router-dom';
import Brand from './Brand';
import Widget from './CartWidget';


const Navbar = () => {
   
    return (
        <header>
            <nav className="nav">
        <ul className='lista'>
            <li>
            <NavLink to={"/"}><Brand/></NavLink>
            </li>
            <li>
            <NavLink to={"/productos"}>NUESTROS PRODUCTOS</NavLink>
            </li>
            <li>
            <NavLink to={"/contacto"}>CONTACTO</NavLink>
            </li>
            <li>
            <NavLink to={"/cart"}><Widget /></NavLink>
            </li>
        </ul>
    </nav>
        </header>
            
    
            
        
    )
}

export default Navbar