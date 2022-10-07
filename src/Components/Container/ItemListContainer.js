import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "./Items.css" 


const ListaProductos = ()=>{
    

    const [disc, setDisc] = useState([])

    useEffect(()=>{
        fetch("https://apigenerator.dronahq.com/api/8tlb9fzR/data")
        .then((res)=> res.json())
        .then((discres)=> setDisc(discres))
    },[])

    console.log(disc)

    return(
        <div className="catalogo">
            {
            disc.length === 0 ? (<h2>Cargando</h2>)
            : (<div>
                <ItemList lista={disc}/>
            </div>)
            }
        </div>
        
    )
    
}


export default ListaProductos