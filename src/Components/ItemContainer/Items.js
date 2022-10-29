import "./Items.css";
import { Link } from "react-router-dom";

const Items = ({ title, artist, image, price, description, category, id, stock }) => {
    return (
      
        <div className="cards">

        <h3 className="cardsTitle">
        {title}
        </h3>

        <h3>{artist}</h3>

        <Link to={`/details/${id}`}>
        <img src={image} alt={title}/>
        </Link>
  
        <h5>{description}</h5>

        <h5>{price}</h5>

        </div>
     
      
        );
  };

 
export default Items