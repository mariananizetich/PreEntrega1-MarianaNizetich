import "./Items.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Items = ({title, artist, price, description, category}) => {
    return (
        <div  className="cards">
          
            <h3 className="cardTitle"><Link to={"/Details/:id"}>{title}</Link></h3>

            <h3>{artist}</h3>
            
            <h5>{price}</h5>

            <h5>{description}</h5>
            
            <p>{category}</p>
            
          <Button/>
    </div>
    
    )
}

export default Items