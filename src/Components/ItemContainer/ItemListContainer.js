import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./Items.css";
import { getFirestore, getDocs, query, collection, where} from "firebase/firestore/lite";


const ListaProductos = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);

    // Traigo los productos de la base de datos

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items")

    // Si accedo a una categoría específica, filtro los productos aplicando "where" 

        if (category){
            const CategoryFilter = query(itemsCollection, where("category", "==", category))

        getDocs(CategoryFilter)
        .then(
            res => setData (
                res.docs.map((item) => ({id: item.id, ...item.data()}))
            )
        )
        }

        // Si no, muestro todos los productos

        else {
            getDocs(itemsCollection)
            .then(
                res => setData (
                    res.docs.map((item) => ({id: item.id, ...item.data()}))
                )
            )
        }
        

    }, [category])

    // Si hay productos que mostrar, los muestro. Si no, se muestra un "CARGANDO"


    return (
        <div className="catalogo">
            {data.length === 0 ?
            (<div>CARGANDO</div>) :
            (<div>
                <h2>
                    {category}
                
                </h2>
                <ItemList lista={data}/>
            </div>)}
        </div>
    )

}
    

    export default ListaProductos