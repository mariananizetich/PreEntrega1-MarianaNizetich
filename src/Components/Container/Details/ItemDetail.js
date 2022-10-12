
import "../Items.css"
import Items from "../Items";


const ItemDetail = ({detail}) =>{
    return(
        <div className="catalogo">
            {
                <Items key={detail.id} title={detail.title} price= {detail.price} artist={detail.artist} description={detail.description}/>
            }
        </div>
    )
}

export default ItemDetail