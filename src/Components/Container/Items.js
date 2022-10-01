import "./Items.css"
import Button from "./Button"



const Items = ({producto, precio}) => {
    return (
        <div  className="cards">
          <ul>
            <li>
            <h2>{producto}</h2>
            </li>
            <li>
              <a href="#">IMAGEN</a>
            </li>
            <li>
            <p>{precio}</p>
            </li>
          </ul>
          
          <Button>Agregar</Button>
          
        
          

    </div>
        
    )
}

export default Items