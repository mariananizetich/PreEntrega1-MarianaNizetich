import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ListaProductos from "./Components/Container/ItemListContainer";
import Home from './Components/Container/Home';
import Contacto from './Components/Container/Contacto';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './Components/Container/Carrito';
import DetailList from './Components/Container/Details/ItemDetailContainer';



function App() {
  
  return (
    
    <div>
      <BrowserRouter>

      <Navbar />

      <Routes>
      <Route path='category/:category' element={<ListaProductos/>}/>
      <Route path='/articulos/:id' element={<DetailList/>}/>
      
      <Route path='/' element={<Home/>}/>
      
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
        
      </Routes>
        
      </BrowserRouter>
      
    

      
    
    
    </div>
  );
}

export default App;