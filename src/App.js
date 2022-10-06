import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ListaProductos from "./Components/Container/ItemListContainer";
import Home from './Components/Container/Home';
import { ItemDetailContainer } from './Components/Container/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  
  return (
    
    <div>
    

      
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path='/HOME' element={<Home/>}/>
        <Route path='/ARTÍCULOS' element={<ListaProductos/>}/>
        <Route path='detail/:Id'element={<ItemDetailContainer/>}/>
      </Routes>
        
      </BrowserRouter>
      <main>

      
        
      </main>
    

      
    
    
    </div>
  );
}

export default App;