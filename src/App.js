import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Container/Home';
import Contacto from './Components/Container/Contacto';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Container/Cart';
import Pagina from './Components/Container/Pagina';
import ListaProductos from './Components/Container/ItemListContainer';
import { useEffect, useState } from 'react';
import DetailList from "./Components/Details/ItemDetailContainer"




function App() {
  const [loader, setLoader] = useState (true)

  useEffect (()=>{
    setTimeout(() =>{
      setLoader(false)
    }, 3000)
    
  }, [])

  return (
    <div>
      {loader ? <div className="lds-facebook"><div></div><div></div><div></div></div> : 

      <BrowserRouter>

      <Navbar />

      <Routes>

      <Route path='details/:id' element={<DetailList/>}/>
      <Route path='category/:category' element={<ListaProductos/>}/>
      <Route path='category/todos' element={<ListaProductos/>}/>
      <Route path='/productos' element={<Pagina/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
        
      </BrowserRouter>
      
    }

      
    
    
    </div>
  );
}

export default App;