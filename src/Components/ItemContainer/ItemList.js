import "./Items.css";
import Items from "./Items";
import { Link } from "react-router-dom";


// Por cada elemento de "lista" que recibo de ItemListContainer, creo un ítem que muestra los productos.

const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=> 
                    
                    (   
                    <div key={product.id}>
                        <Link to={`/details/${product.id}`}>
                        <Items title={product.title} image={product.image} artist={product.artist} id={product.id}/>
                        </Link>
                        </div>
                    ))
                }
                
            </div>
        )
}

export default ItemList