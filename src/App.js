import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Produtos from './pages/Productos';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';
import Cart from './components/Cart/Cart';
import { CartProvider } from '../src/context/CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<Produtos />} />
            <Route
              path='/productos/category/:category'
              element={<Produtos />}
            />
            <Route
              path='/preguntasfrecuentes'
              element={<PreguntasFrecuentes />}
            />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/productos/:id' element={<Detalle />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
