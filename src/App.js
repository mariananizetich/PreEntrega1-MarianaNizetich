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
          CHARLY GARCÍA
        </h1>
        <p>
          CATÁLOGO DE VINILOS DISPONIBLES:
        </p>
        </Titulo>
      <main>
        <ListaProductos />
      </main>
     

      
    
    
    </div>
  );
}

export default App;