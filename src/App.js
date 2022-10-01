import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ListaProductos from './Components/Container/ItemListContainer';
import Titulo from "./Components/Container/Titulo";



function App() {
  
  return (
    
    <div className="App">
      <Navbar />
        <Titulo>
        <h1>
          E-Commerce en proceso
        </h1>
        <p>
          Pronto te mostraremos todos los productos disponibles.
        </p>
        </Titulo>
      <main>
        <ListaProductos />
      </main>
     

      
    
    
    </div>
  );
}

export default App;