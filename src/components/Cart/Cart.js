import ItemCart from '../ItemCart/ItemCart';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddCardIcon from '@mui/icons-material/AddCard';
import Stack from '@mui/material/Stack';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, cleanCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h2>Upss... Tu carrito está vacío</h2>
        <img
          src='https://media.giphy.com/media/giXLnhxp60zEEIkq8K/giphy-downsized-large.gif'
          width={300}
        ></img>
        <div>
          <Button
            variant='contained'
            color='info'
            startIcon={<ShoppingCartCheckoutIcon />}
            size='large'
            onClick={() => navigate('/productos')}
          >
            Ir a comprar
          </Button>
        </div>
      </>
    );
  }
  return (
    <div>
      {cart.map((productos) => (
        <ItemCart key={productos.id} productos={productos} />
      ))}
      <h2> Total: ${totalPrice()}</h2>
      <Stack spacing={2} direction='row' justifyContent='center'>
        <Button
          className='button-delete'
          startIcon={<RemoveShoppingCartIcon />}
          size='large'
          color='error'
          variant='contained'
          onClick={cleanCart}
        >
          Borrar Carrito
        </Button>
        <Button
          className='btn-cart'
          startIcon={<AddCardIcon />}
          size='large'
          color='success'
          variant='contained'
          onClick={() => navigate('/checkout')}
        >
          Completar compra
        </Button>
      </Stack>
    </div>
  );
};

export default Cart;
