import React, { useState } from "react"

const cartContext = React.createContext()

const cartProvider = () =>{
    const [cart, setCart] = useState({})

    return <cartContext.Provider>
    </cartContext.Provider>
}


export {cartProvider}