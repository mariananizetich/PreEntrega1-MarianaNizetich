import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Routes/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Pagina from './Components/Routes/Pagina';
import ListaProductos from './Components/ItemContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import DetailList from "./Components/Details/ItemDetailContainer";
import CartProvider from './Components/Context/cartContext';
import Brief from './Components/Checkout/Brief';
import ContactForm from './Components/Routes/Contacto';
import CartProvider from './Components/Context/cartContext';






function App() {

  
  // Mientras carga la página, muestro un "loader". Le pongo un timer de tres segundos.

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

      <CartProvider>
        
      <Routes>

      <Route path='details/:id' element=      {<DetailList/>}/>
      <Route path='category/:category' element=     {<ListaProductos/>}/>
      <Route path='category/todos' element=     {<ListaProductos/>}/>
      <Route path='/productos' element={<Pagina/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<ContactForm/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Brief/>}/>
  
      </Routes>

      </CartProvider>

      <Footer/>
     
        
      </BrowserRouter>
      
    }

      
    
    
    </div>
  );
}

export default App;