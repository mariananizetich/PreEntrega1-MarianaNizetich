import './NavBar.css';
import CartWidget from "./CartWidget"

const Navbar = ({}) => {
   
    return (
        
            <nav className="nav">
        <ul className='lista'>
            <li><a>
                HOME
            </a>
            </li>
            <li><a>
                ARTÍCULOS
            </a>
            </li>
            <li><a>
                CONTACTO
            </a>
            </li>
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
    
            
        
    )
}

export default Navbar