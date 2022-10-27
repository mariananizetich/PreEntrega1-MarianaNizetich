

import Items from "../Container/Items";
import ItemCount from "../Container/ItemCounter";


const ItemDetail = ({detail}) =>{

    const onAdd = () =>{
        
    }
    return(
        <div className="details">
            {
                <Items key={detail.id} title={detail.title} price= {detail.price} artist={detail.artist} description={detail.description} />
                
            }
           
           <ItemCount initial={1} stock={8} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail