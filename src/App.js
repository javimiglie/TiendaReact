import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';

import NotFound from './components/NotFound/NotFound';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route
              path='/productos/category/:category'
              element={<ItemListContainer />}
            />
            <Route
              path='/preguntasfrecuentes'
              element={<PreguntasFrecuentes />}
            />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
