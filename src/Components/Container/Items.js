import "./Items.css"
import Button from "./Button"

const Items = ({title, price, description, category}) => {
    return (
        <main>
        <div  className="cards">
          
            <h2>{title}</h2>
            
            
            <h5>{price}</h5>
            
            <h5>{description}</h5>
            
            <p>{category}</p>
            
        
          
          <Button>+</Button>
    </div>
    </main>
    )
}

export default Items