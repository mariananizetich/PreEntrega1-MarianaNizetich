import { Link } from "react-router-dom";
import "../ItemContainer/Items.css";

const Pagina = () =>{

    return (
        <div>
            <ul className="listaPag">
            <li>
            <Link to={"/category/CharlyGarcia"}><h3>CHARLY GARCÍA</h3></Link>
            </li>
            <li>
            <Link to={"/category/PinkFloyd"}><h3>PINK FLOYD</h3></Link>
            </li>
            <li>
            <Link to={"/category/Todos"}><h3>TODOS LOS VINILOS</h3></Link>
            </li>
            </ul>
            
      </div>
    )
}

export default Pagina