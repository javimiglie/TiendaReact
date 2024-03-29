import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdown = [
    { url: '/productos/category/Buzos', name: 'Buzos' },

    { url: '/productos/category/Camperas', name: 'Camperas' },

    { url: '/productos/category/Remeras', name: 'Remeras' },

    { url: '/productos', name: 'Todos los productos' },
  ];

  return (
    <AppBar position='static'>
      <Toolbar>
        <div className='container-logo'>
          <Link to='/'>
            <img src='./logo.png' alt='logo' />
          </Link>
        </div>

        <div className='container-titulo'>
          <h1>TIENDA JAVI</h1>
        </div>

        <div className='container-lista'>
          <ul>
            <li>
              <Button>
                <Link to='/'>INICIO</Link>
              </Button>
            </li>

            <li>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: 'white' }}
              >
                PRODUCTOS
              </Button>

              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {dropdown.map((menu) => (
                  <MenuItem key={menu.name} onClick={handleClose}>
                    <Link className='menu-item' to={menu.url}>
                      {menu.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </li>

            <li>
              <Button>
                <Link to='/preguntasfrecuentes'>PREGUNTAS FRECUENTES</Link>
              </Button>
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
