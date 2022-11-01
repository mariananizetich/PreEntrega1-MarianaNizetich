import "./Cart.css";
import { useCartContext } from "../Context/cartContext";





const ItemCart = ({product}) => {

    const {removeItem} = useCartContext()

    return(
        <div className="ItemCart">
            <img src={product.image} alt={product.title}></img>

            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: $ {product.quantity * product.price}</p>
                <button onClick={() => removeItem(product.id)}>X</button>
            </div>

                
            
        </div>
    )
}

export default ItemCart