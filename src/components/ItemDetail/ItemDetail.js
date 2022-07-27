import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
const ItemDetail = ({ producto }) => {
  const onAdd = () => {
    console.log(`Agregaste un producto al carrito`);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{producto.name}</h3>
      <img src={producto.img} alt={producto.name} width={200} />
      <p>{producto.description}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
