

import Items from "../Container/Items";
import Button from "../Container/ItemCounter";


const ItemDetail = ({detail}) =>{
    return(
        <div className="details">
            {
                <Items key={detail.id} title={detail.title} price= {detail.price} artist={detail.artist} description={detail.description} />
                
            }
           
           <Button/>
        </div>
    )
}

export default ItemDetail