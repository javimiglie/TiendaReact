import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const navigate = useNavigate();
  const onAdd = (cantidad) => {
    if (cantidad > 1) {
      console.log(`agregaste ${cantidad} productos al carrito`);
    } else {
      console.log(`agregaste 1 producto al carrito`);
    }
    setIrAlCarrito(true);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.description}</p>
      {irAlCarrito ? (
        <div>
          <Button onClick={() => navigate('/productos')}>
            Seguir comprando
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={() => navigate('/cart')}
          >
            Ir al carrito
          </Button>
        </div>
      ) : (
        <ItemCount
          stock={producto.stock}
          count={count}
          setCount={setCount}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};
export default ItemDetail;
