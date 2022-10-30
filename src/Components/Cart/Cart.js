import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";




const Cart = () =>{
    const {cart, totalPrice, clearCart} = useCartContext();
   
    

    // Si el carrito está vacío, muestro un link para ir a Productos. Si hay productos en el carrito, los muestro, para eso hago un mapeo del carrito. Por cada producto creo un ítem.
    // Si el carrito contiene productos, doy opciones para vaciarlo, finalizar compra o seguir comprando.

    if (cart.length === 0){
        return(
            <div className="cart">
            <h3>EL CARRITO ESTÁ VACÍO.</h3>

            <Link to={"/productos"}>Ir a Productos</Link>
            </div>
        )
    }

    return(
        <div>
            <h3 className="cart">CARRITO</h3>

            <div>
                {
                     cart.map(product => <ItemCart key={product.id} product={product}/>)
                }
                
                
                <p className="cart">
                Total: $ {totalPrice()}
                </p>

    


            <div className="cartLink">
            <Link to={"/productos"}>
            <button className="cartButton">Seguir comprando</button>
            </Link>

            <Link to={"/checkout"}>
            <button className="cartButton">Finalizar compra</button>
            </Link>

            <button className="cartButton" onClick={clearCart}>Vaciar Carrito</button>

            </div>

        </div>
                
        </div>
               
            
    )
}

export default Cart