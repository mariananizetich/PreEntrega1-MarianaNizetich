import "./Items.css";
import Items from "./Items";
import { Link } from "react-router-dom";

const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=>(
                            <Link key={product.id} to={'details/' +product.id}>
                            <Items key={product.id} title={product.title}
                            price={product.price}
                            artist= {product.artista} 
                            description={product.description}/>
                            </Link>
                    
                    ))
                }
            </div>
        )
}

export default ItemList