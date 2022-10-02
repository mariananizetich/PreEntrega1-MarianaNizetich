import { useState } from "react"

const stock = 8

const Button = () =>{
    const [contador, setContador] = useState(0)


    const suma = () =>{
        contador < stock ? setContador(contador+1) : console.log("Hay 8 vinilos en stock")
    }
    const resta = () =>{
        contador >0 ? setContador(contador-1) : console.log("Valor incorrecto.")
        
    }

    return (<div>

        <button onClick={suma}>+</button>
        <br></br>
        <button onClick={resta}>-</button>
        <div>
        {String(contador)}
        </div>
        </div>)
            
    
    
}

export default Button