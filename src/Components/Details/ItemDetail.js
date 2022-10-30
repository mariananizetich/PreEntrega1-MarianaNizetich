import Items from "../ItemContainer/Items";
import Counter from "../ItemContainer/ItemCounter";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";





// Hago un mapeo para mostrar la descripción de cada producto que recibo de ItemDetailContainer. Por cada producto, se crea un ítem.
// Paso los valores para la función Counter, que agrega productos al carrito según cantidades.
// Con un useState, si aprieto agregar al carrito, renderizo un link para terminar la compra, que me redirige al carrito.

export const ItemDetail = ({detail}) =>{
    const [gotoCart, setGotocart] = useState (false);
    const {addItem} = useCartContext();
    


    const onAdd = (quantity) =>{
       setGotocart(true);
       addItem(detail, quantity);
       
       
       
    }
    
    return(
        
        <div>
         
           
            {   
                <Items key={detail.id} title={detail.title} image={detail.image} price= {detail.price} artist={detail.artist} description={detail.description} stock={detail.stock} />
                
            }
            {
                gotoCart ? <Link to={"/cart"}><button>Ir al Carrito</button></Link> :
                <Counter initial={1} stock={detail.stock} onAdd={onAdd} />
            }
           
    
            <div>
                <Link to={"/productos"}><button>Seguir comprando</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail