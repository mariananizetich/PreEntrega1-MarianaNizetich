import './NavBar.css';
import Widget from './CartWidget';


const Navbar = () => {
   
    return (
        <header>
            <nav className="nav">
        <ul className='lista'>
            <li><a href='#'>
            HOME    
            </a>
            </li>
            <li><a href='#'>
                ARTÍCULOS
            </a>
            </li>
            <li><a href='#'>
                CONTACTO
            </a>
            </li>
            <li>
                <a href='#'>
                <Widget />
                </a>
                
            </li>
        </ul>
    </nav>
        </header>
            
    
            
        
    )
}

export default Navbar