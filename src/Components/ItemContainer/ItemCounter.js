import { useState, useEffect } from "react";
import "./Items.css";



const Counter = ({initial, stock, onAdd}) =>{
    const [counter, setCounter] = useState(initial)

    
    const uncrease = () =>{
        setCounter(counter+1)
    }
    const decrease = () =>{
        setCounter(counter-1)
        
    }

    // Agrego un useEffect para que cada vez que el valor cambie, se actualice directamente. 
    // Si el valor llega al stock disponible, se desactiva el botón. Lo mismo ocurre cuando el valor es menor o igual a 0.

    useEffect(() =>{
        setCounter(initial)
    }, [initial])

    return (<div className="counter"> 

        <button disabled={counter >= stock} onClick={uncrease} className="button">+</button>
    
        <span>
        {counter}
        </span>

        <button disabled={counter <= 0} onClick={decrease} className="button">-</button>

        <button disabled={stock <= 0 || counter <= 0} 
        onClick={() => onAdd(counter)} 
        className="cartButton">Agregar al carrito</button>
        </div>)
            
    
    
}

export default Counter