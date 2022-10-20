import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ListaProductos from "./Components/Container/ItemListContainer";
import Home from './Components/Container/Home';
import Contacto from './Components/Container/Contacto';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './Components/Container/Carrito';
import DetailList from './Components/Container/Details/ItemDetailContainer';
import { useEffect, useState } from 'react';



function App() {
  const [loader, setLoader] = useState (true)

  useEffect (()=>{
    setTimeout(() =>{
      setLoader(false)
    }, 5000)
    
  }, [])

  return (
    <div>
      {loader ? <div className="lds-facebook"><div></div><div></div><div></div></div> : 

      <BrowserRouter>

      <Navbar />

      <Routes>

      <Route path='details/:id' element={<DetailList/>}/>
      <Route path='category/:category' element={<ListaProductos/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
        
      </Routes>
        
      </BrowserRouter>
      
    }

      
    
    
    </div>
  );
}

export default App;