import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const navigate = useNavigate();
  const { id, name, description, price, img } = producto;
  const { addToCart } = useContext(CartContext);

  const onAdd = () => {
    let itemAComprar = {
      id,
      name,
      price,
      img,
      quantity: count,
    };
    setIrAlCarrito(true);
    addToCart(itemAComprar);
  };
  return (
    <div className='info-container'>
      <h2>Información del producto</h2>
      <h3>{name}</h3>
      <img src={img} alt={name} width={200} />
      <p>{description}</p>
      {irAlCarrito ? (
        <div>
          <Button
            startIcon={<AddShoppingCartIcon />}
            size='large'
            onClick={() => navigate('/productos')}
          >
            Seguir comprando
          </Button>
          <Button
            color='primary'
            startIcon={<ShoppingCartCheckoutIcon />}
            size='large'
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
