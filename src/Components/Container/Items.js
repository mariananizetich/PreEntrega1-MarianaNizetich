import "./Items.css"
import Button from "./Button"



const Items = ({producto, precio}) => {
    return (
        <div  className="cards">
          <ul>
            <li>
            <h3>{producto}</h3>
            </li>
            <li>
              <a href="#">IMAGEN</a>
            </li>
            <li>
            <p>{precio}</p>
            </li>
          </ul>
          <Button>+</Button>
    </div>
        
    )
}

export default Items