
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Items from './Components/Container/Items';
import ListaProductos from './Components/Container/ItemListContainer';




function App() {
  
  return (
    
    <div className="App">
      <header>
        <Navbar />
        </header>
      <main>
        <ListaProductos />
        
      </main>
    
    
    </div>
  );
}

export default App;