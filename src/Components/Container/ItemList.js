import "./Items.css" 
import Items from "./Items";

const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=>(
    
                            <Items title={product.title}
                            price={product.price} 
                            description={product.description} 
                            category={product.category} />
                    
                    ))
                }
            </div>
        )
}

export default ItemList