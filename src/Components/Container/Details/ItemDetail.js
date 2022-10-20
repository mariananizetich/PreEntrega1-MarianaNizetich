

import Items from "../Items";
import Button from "../ItemCount";


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