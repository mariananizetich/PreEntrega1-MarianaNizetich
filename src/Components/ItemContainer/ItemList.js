import "./Items.css";
import Items from "./Items";

// Por cada elemento de "lista" que recibo de ItemListContainer, creo un ítem que muestra los productos.

const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=> 
                    
                    (
                        <Items key={product.id} title={product.title} image={product.image} artist={product.artist} id={product.id}/>

                            
                    ))
                }
                
            </div>
        )
}

export default ItemList