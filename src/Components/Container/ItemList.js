import "./Items.css";
import Items from "./Items";

const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=>(
    
                            <Items key={product.id} title={product.title}
                            price={product.price}
                            artist= {product.artista} 
                            description={product.description} 
                            category={product.category} />
                    
                    ))
                }
            </div>
        )
}

export default ItemList