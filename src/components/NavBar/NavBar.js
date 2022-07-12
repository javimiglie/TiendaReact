import './NavBar.css';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <div className='container-logo'>
          <img src='./logo.png' />
        </div>
        <div className='container-titulo'>
          <h1>Tienda Javi</h1>
        </div>
        <div className='container-lista'>
          <ul>
            <li>
              <a href='#'>Nosotros</a>
            </li>
            <li>
              <a href='#'>Hombres</a>
            </li>
            <li>
              <a href='#'>Mujeres</a>
            </li>
            <li>
              <a href='#'>Contacto</a>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
