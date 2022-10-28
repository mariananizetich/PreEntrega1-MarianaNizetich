import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {  getFirestore, getDoc, doc  } from "firebase/firestore/lite"


const DetailList = () =>{
 const {id} = useParams()
  const [data, setData] = useState({})

  useEffect(()=>{
    const db = getFirestore()
    const ItemsId = doc(db, "items", id)

    getDoc(ItemsId)
    .then(
      res => setData ({id: res.id, ...res.data()})
    )
   
  }, [id])
  
  
  return (

    <div>
      {
        data ? (<ItemDetail detail={data}/>) : (<h3>CARGANDO</h3>)
      }
    </div>

    )
}

export default DetailList
