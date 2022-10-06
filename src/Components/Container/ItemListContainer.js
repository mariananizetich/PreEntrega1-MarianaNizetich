import Items from "./Items"
import "./Items.css" 


const ListaProductos = () => {
return (
    <main>
    <div className="catalogo">
        <Items name ="Yendo de la Cama al Living" price="$6500" description="CHARLY 1"/>
        <Items name ="Clics Modernos"precio="$7500" description="CHARLY 2"/>
        <Items name ="Piano Bar" price="$7800" description="CHARLY 3"/>
        <Items name ="Filosofía Barata y Zapatos de Goma" price="$9000" description="CHARLY 4"/>
        <Items name ="La Hija de la Lágrima" price="$9000" description="CHARLY 5"/>
        <Items name ="Hello! MTV Unplugged" price="$9000" description="CHARLY 6"/>
    </div>
    </main>
    
)    
}

export default ListaProductos
