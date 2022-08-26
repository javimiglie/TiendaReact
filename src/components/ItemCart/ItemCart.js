import React from 'react';
import './ItemCart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const ItemCart = ({ productos }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className='container-cart'>
        <div className='container-img'>
          <img className='img-cart' src={productos.img} alt={productos.name} />
        </div>
        <div>
          <h3>Producto</h3>
          <p>{productos.name}</p>
        </div>
        <div>
          <h3>Cantidad</h3>
          <p>{productos.quantity}</p>
        </div>
        <div>
          <h3>Precio</h3>
          <p>${productos.price}</p>
        </div>
        <div>
          <h3>Subtotal</h3>
          <p>${productos.quantity * productos.price}</p>
        </div>
        <div>
          <DeleteForeverRoundedIcon
            sx={{ fontSize: 45 }}
            className='delete-icon'
            onClick={() => removeItem(productos.id)}
          ></DeleteForeverRoundedIcon>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
