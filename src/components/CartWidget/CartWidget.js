import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  return (
    <div>
      <Link to={`/cart`}>
        <Badge badgeContent={2} color='success'>
          <ShoppingCartIcon style={{ fontSize: 50, color: `white` }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
