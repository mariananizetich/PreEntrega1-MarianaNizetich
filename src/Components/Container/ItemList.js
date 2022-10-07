
import Items from "./Items";

const ItemList = ({lista}) =>{
        return(
            <div>
                {
                    lista.map((product)=>(
    
                            <Items title={product.title} price={product.price} description={product.description} 
                            category={product.category} />
                    
                    ))
                }
            </div>
        )
}

export default ItemList