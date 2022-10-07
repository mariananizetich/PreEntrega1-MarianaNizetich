import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "./Items.css" 


const ListaProductos = ()=>{
    

    const [disc, setDisc] = useState([])

    useEffect(()=>{
        fetch("https://apigenerator.dronahq.com/api/g1w-6XIq/data")
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

/*
const ListaProductos = () => {
return (
    <main>
    <div className="catalogo">
        <Items name ="Yendo de la Cama al Living" price="$6500" description="CHARLY 1" category="Solista"/>
        <Items name ="Clics Modernos"price="$8500" description="CHARLY 2" category="Solista"/>
        <Items name ="Piano Bar" price="$7800" description="CHARLY 3" category="Solista"/>
        <Items name ="Filosofía Barata y Zapatos de Goma" price="$9000" description="CHARLY 4" category="Solista"/>
        <Items name ="La Hija de la Lágrima" price="$9000" description="CHARLY 5" category="Solista"/>
        <Items name ="Hello! MTV Unplugged" price="$9000" description="CHARLY 6" category="Solista"/>
    </div>
    </main>
    
)    
}
*/
export default ListaProductos