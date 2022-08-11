import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useContext(CartContext);
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
    </div>
  );
};

export default Cart;
