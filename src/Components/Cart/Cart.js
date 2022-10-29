import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";



const Cart = () =>{
    const {cart, totalPrice} = useCartContext()

    // Si el carrito está vacío, muestro un link para ir a Productos. Si hay productos en el carrito, los muestro, para eso hago un mapeo del carrito. Por cada producto creo un ítem.

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
            </div>
               
            
        </div>
            
    )
}

export default Cart