import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cantInCart } = useContext(CartContext);
  return (
    <div>
      <Link to={`/cart`}>
        <Badge badgeContent={cantInCart()} color='success'>
          <ShoppingCartIcon style={{ fontSize: 50, color: `white` }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
