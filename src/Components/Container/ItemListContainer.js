import Items from "./Items"
import ItemDetail from "./ItemDetailContainer"




const ListaProductos = () => {
return (
    <div>
        <Items producto ="Producto 1" precio="$6500"/>
        <Items producto ="Producto 2"precio="$7500"/>
        <Items producto ="Producto 3" precio="$7800"/>
        <Items producto ="Producto 4" precio="$9000"/>
    </div>
)    
}

export default ListaProductos