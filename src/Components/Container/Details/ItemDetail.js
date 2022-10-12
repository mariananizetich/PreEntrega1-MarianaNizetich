
import "../Items.css"
import Items from "../Items";


const ItemDetail = ({detail}) =>{
    return(
        <div className="catalogo">
            {
                detail.map((product)=>(
                        <Items key={product.id} title={product.title}
                        price={product.price}
                        artist= {product.artista} 
                        description={product.description}/>
                        
                ))
            }
        </div>
    )
}

export default ItemDetail