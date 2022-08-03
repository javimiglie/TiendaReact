import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
const ItemDetail = ({ producto }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const onAdd = (cantidad) => {
    if (cantidad > 1) {
      console.log(`agregaste ${cantidad} productos al carrito`);
    } else {
      console.log(`agregaste 1 producto al carrito`);
    }
    setIrAlCarrito(true);
    setCount(cantidad);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.description}</p>
      {irAlCarrito ? (
        <Button
          color='primary'
          variant='contained'
          onClick={() => navigate('/cart')}
        >
          Ir al Carrito
        </Button>
      ) : (
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};
export default ItemDetail;
