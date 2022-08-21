import './Cart.css';
import ItemCart from '../ItemCart/ItemCart';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, cleanCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <p>El carrito está vacio</p>

        <Button onClick={() => navigate('/productos')}>Ir a comprar</Button>
      </>
    );
  }
  return (
    <div>
      {cart.map((productos) => (
        <ItemCart key={productos.id} productos={productos} />
      ))}
      <p> Total: ${totalPrice()}</p>
      <Button color='primary' variant='contained' onClick={cleanCart}>
        Borrar Carrito
      </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={() => navigate('/checkout')}
      >
        Completar compra
      </Button>
    </div>
  );
};

export default Cart;
