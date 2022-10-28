import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./Items.css";
import { getFirestore, getDocs, query, collection, where} from "firebase/firestore/lite";


const ListaProductos = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);

    
    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items")

        if (category){
            const CategoryFilter = query(itemsCollection, where("category", "==", category))

        getDocs(CategoryFilter)
        .then(
            res => setData (
                res.docs.map((item) => ({id: item.id, ...item.data()}))
            )
        )
        }

        else {
            getDocs(itemsCollection)
            .then(
                res => setData (
                    res.docs.map((item) => ({id: item.id, ...item.data()}))
                )
            )
        }
        

    }, [category])


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