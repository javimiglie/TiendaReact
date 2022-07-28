import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Produtos from './pages/Productos';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Produtos />} />
          <Route
            path='/preguntasfrecuentes'
            element={<PreguntasFrecuentes />}
          />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
