import { useCartContext } from "../Context/cartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Brief.css";
import { useState } from "react";




const Brief = () =>{
    const {cart, totalPrice} = useCartContext();
    const [orderId, setOrderId] = useState();
    
    
    
    const order = {
        items: cart.map(prod => ({id: prod.id, title: prod.title, price: prod.price, quantity: prod.quantity})),
        total: totalPrice(),
    };

    
    

    const saveOrder = () =>{
        const db = getFirestore()
        const orderCol = collection(db, "orders");
        addDoc(orderCol, order)
        .then((res) => {
            setOrderId(res.id)

            
          })
        
    
     

    }


    return(


        <div className="brief">  
        
            <div>
            <form>
                <div className="label">
                <label htmlFor="name">Nombre y Apellido
                :</label>
                <input name="name"
                id="name"
                
               
                className="label"/>
                </div>

                <div className="label">
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                name="email"
                id="email"
               
                
                className="label"/>
                </div>               
            </form>
            <div>
                <button onClick={saveOrder}>
                    Enviar
                </button>
            </div>

            </div>

            <div>
            <h3>
            Su compra fue realizada con éxito con el código {orderId}. ¡Muchas gracias!
            </h3>
            </div>
        
            
            
        </div>
    )

}

export default Brief