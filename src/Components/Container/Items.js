import "./Items.css"
import Button from "./Button"

const Items = ({name, price, description}) => {
    return (
        <div  className="cards">
          <ul>
            <li>
            <h2>{name}</h2>
            </li>
            <li>
            <p>{price}</p>
            </li>
            <li>
            <p>{description}</p>
            </li>
            
          </ul>
          
          <Button>+</Button>
    </div>
        
    )
}

export default Items