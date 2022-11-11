import { useCartContext } from "../Context/cartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Brief.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const defaultForm = {name: "", email: "", message: ""};

const Brief = () =>{
    const {cart, totalPrice, clearCart} = useCartContext();
    const [id, setId] = useState("");
    const [form, setForm] = useState(defaultForm); 
    
    
    
    const changeHandler = (ev) => {
        setForm({...form, [ev.target.name]: ev.target.value});
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        const db = getFirestore();
        const orderCol = collection(db, "orders");
        addDoc(orderCol,{
            form,
            items: cart,
            total: totalPrice(),
        }).then((snapshot) => {
        setId(snapshot.id);
        clearCart()
        });
      };

      return(
        <div className="brief">
            {
                id ? (<div className="label">
                    <h3>Su compra fue realizada con éxito con el código {id}. ¡Muchas gracias!</h3>
                </div>) : 
                (<div className="label">
                <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="name" className='label'>Nombre</label>
                <input
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler}
                className='label'
                />
                </div>
                <div>
                <label htmlFor="email" className='label'>Email</label>
                <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler}
                className='label'
                />
                </div>
                <div>
                <label htmlFor="message" className='label'>Método de pago</label>
                <input
                name="message"
                id="message"
                value={form.message}
                onChange={changeHandler}
                className='label'>
                </input>
                </div>
                <button className='label'>Enviar</button>
                </form>

                <Link to={"/cart"} className="label"><button>Volver</button></Link>
                </div>)
            }
        </div>
      )
    }

export default Brief