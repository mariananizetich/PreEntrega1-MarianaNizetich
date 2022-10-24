import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const DetailList = () =>{
 const {id} = useParams()
  const [disc, setDisc] = useState({})

  useEffect(()=>{
    fetch(`https://apigenerator.dronahq.com/api/S0cr36E5/data/${id}`)
    .then((res) => res.json())
    
    .then((disc)=>{

        setDisc(disc);
      
    })
   
  }, [id])
  
  
  return (

    <div>
      {
        disc ? (<ItemDetail detail={disc}/>) : (<h3>CARGANDO</h3>)
      }
    </div>

    )
}

export default DetailList