import { useState } from "react"


const Button = ({children
}) =>{
    const [suma, setSuma] = useState(0)
    
    

    const clickHandler = () =>{
            setSuma(suma+1)
    }
    return(
        <div>
            <button onClick={clickHandler}>
            {children}
            </button>
            <div>
            {String(suma)}
            </div>
        </div>
    )
}

export default Button