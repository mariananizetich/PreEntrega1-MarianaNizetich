import { useState } from "react";
import "./Items.css";

const stock = 8

const Counter = () =>{
    const [contador, setContador] = useState(0)


    const suma = () =>{
        contador < stock ? setContador(contador+1) : alert("Hay 8 vinilos en stock")
    }
    const resta = () =>{
        contador >0 ? setContador(contador-1) : alert("Valor incorrecto.")
        
    }

    return (<div className="counter"> 

        <button onClick={suma} className="button">+</button>
        
        <button onClick={resta} className="button">-</button>
        <div>
            <h4>{String(contador)}</h4>
        </div>

        <button className="cartButton">Agregar al carrito</button>
        </div>)
            
    
    
}

export default Counter