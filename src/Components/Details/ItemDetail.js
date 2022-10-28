import Items from "../ItemContainer/Items";
import Counter from "../ItemContainer/ItemCounter";




const ItemDetail = ({detail}) =>{

    const onAdd = () =>{
        
    }
    
    return(
        
        <div className="details">
         
           
            {   
                <Items key={detail.id} title={detail.title} image={detail.image} price= {detail.price} artist={detail.artist} description={detail.description} />
                
            }
           
           <Counter initial={1} stock={8} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail