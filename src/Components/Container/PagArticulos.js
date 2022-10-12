import "./Titulo.css";
import { Link } from "react-router-dom";

const PagArticulos = () =>{
    return(
        <div className="titulo">
        <h1>
          PEPERINA
        </h1>
        <p>ARTISTAS</p>

        <div>
        <ul>
          <li>
            <Link to={"/category/CharlyGarcia"}>CHARLY GARCÍA</Link>
          </li>
          <li>
          <Link to={"/category/PinkFloyd"}>PINK FLOYD</Link>
          </li>
          <li>
          <Link to={"category/Todos"}>TODOS LOS VINILOS</Link>
          </li>
        </ul>
        </div>
    </div>
    )
}

export default PagArticulos