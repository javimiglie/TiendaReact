import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
const ItemDetail = ({ producto }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.description}</p>
      {irAlCarrito ? (
        <Link className='link-carrito' to='/cart'>
          <Button color='primary' variant='contained'>
            Ir al Carrito
          </Button>
        </Link>
      ) : (
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};
export default ItemDetail;
