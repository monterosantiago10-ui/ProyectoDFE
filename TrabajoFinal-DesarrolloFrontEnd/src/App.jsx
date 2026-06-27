import './App.css';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import Footer from './components/Footer';


function App() {
  const modoEdicion = false; 

  return (
    <div className="is-flex is-flex-direction-column" style={{ minHeight: '100vh' }}>
      
      <main className="container mt-6 px-4 is-flex-grow-1">
        <h1 className="title has-text-centered mb-6">Almacén / Tienda</h1>
        
        <div className="columns is-desktop">
         {/* Columna del Formulario */}
          <div className="column is-one-third-desktop">
            <Formulario esEdicion={modoEdicion} />
          </div>
          
          {/* Columna de la Tabla */}
          <div className="column">
            <Tabla />
          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
