import "./Items.css";
import { Link } from "react-router-dom";

const Items = ({ title, artist, image, price, description, category, id }) => {
    return (
      <div className="cards">
        <h3>
          <Link to={`/details/${id}`} className="cardsTitle">{title}</Link>
        </h3>
  
        <h3>{artist}</h3>
  
        <h5>{price}</h5>

        <img src={image} alt="vinilo"/>
          
        <h5>{description}</h5>
  
        <p>{category}</p>

      </div>
    );
  };

export default Items