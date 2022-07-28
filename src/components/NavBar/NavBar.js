import './NavBar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <div className='container-logo'>
          <Link to='/'>
            <img src='./logo.png' />
          </Link>
        </div>
        <div className='container-titulo'>
          <h1>Tienda Javi</h1>
        </div>
        <div className='container-lista'>
          <ul>
            <li>
              <Link to='/'> Inicio</Link>
            </li>
            <li>
              <Link to='/productos'> Productos</Link>
            </li>
            <li>
              <Link to='/preguntasfrecuentes'> Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link to='/contacto'> Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <button variant='text' className='button-cart'>
            <CartWidget />
          </button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
