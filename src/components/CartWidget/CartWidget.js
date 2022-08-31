import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cantInCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <Badge badgeContent={cantInCart()} color='success'>
        <ShoppingCartIcon
          cursor='pointer'
          style={{ fontSize: 50, color: `white` }}
          onClick={() => navigate('/cart')}
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
