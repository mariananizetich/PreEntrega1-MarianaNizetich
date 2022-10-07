import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ListaProductos from "./Components/Container/ItemListContainer";
import Home from './Components/Container/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  
  return (
    
    <div>
    

      
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path='/HOME' element={<Home/>}/>
        
        <Route path='/ARTÍCULOS' element={<ListaProductos/>}/>
       
       
       
      </Routes>
        
      </BrowserRouter>
      
    

      
    
    
    </div>
  );
}

export default App;