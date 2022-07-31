import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Link to={`/cart`}>
        <ShoppingCartIcon style={{ fontSize: 50, color: `white` }} />
      </Link>
    </div>
  );
};

export default CartWidget;
