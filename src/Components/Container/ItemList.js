import "./Items.css";
import Items from "./Items";


const ItemList = ({lista}) =>{
        return(
            <div className="catalogo">
                {
                    lista.map((product)=> 
                    
                    (
                        <Items key={product.id} title={product.title} artist={product.artist} id={product.id}/>

                            
                    ))
                }
                
            </div>
        )
}

export default ItemList