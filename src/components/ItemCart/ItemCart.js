import React from 'react';
import './ItemCart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from '@mui/material';

const ItemCart = ({ productos }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <img src={productos.img} alt={productos.name} />
      <div className='itemCart'>
        <p>Título: {productos.name}</p>
        <p>Cantidad: {productos.quantity}</p>
        <p>Precio: ${productos.price}</p>
        <p>Subtotal: ${productos.quantity * productos.price}</p>
        <Button onClick={() => removeItem(productos.id)}> Eliminar </Button>
      </div>
    </div>
  );
};

export default ItemCart;
