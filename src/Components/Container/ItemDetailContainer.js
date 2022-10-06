/*import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import lista from "./Data"
import Items from "./Items";

export function ItemDetailContainer() {
    const {id} = useParams()
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response);
        })
        .catch(error => console.log(error));
    },[id]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([lista.find((charly) => charly.id == id)])
        }, 2000)
      })

    return (
      <div>
          {productList ? (
            <Items lista={productList}/>
            ) : (
              <h2>Cargando</h2>
            )}
           </div>
           );
};
*/