import React from "react";
import { useState, useContext } from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);
    
    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));


    

    // Si el ítem seleccionado no está en el carrito, lo agrego. Si está, solo modifico la cantidad, sin duplicar el producto. Para esto, uso un map: 

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(prod => {return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod}))
        } else{
            setCart([...cart, {...item, quantity}])
        }
        
    };


    // Recorro el array con un reduce, y por cada elemento ejecuto la función para calcular el precio final:

    const totalPrice = () => {
        return cart.reduce((prev, act) => 
        prev + act.quantity * act.price, 0)
    };

    // Función para mostrar la cantidad de productos que hay en el carrito:

    const totalProducts = () => {
        cart.reduce ((acc, prodActual) => acc + prodActual.quantity, 0)
    }


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider