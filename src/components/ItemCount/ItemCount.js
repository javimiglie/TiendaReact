import './ItemCount.css';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ stock, count, setCount, onAdd }) => {
  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className='container-comprar'>
      <div className='count-item'>
        <Button onClick={restCount}> - </Button>
        <p> {count} </p>
        <Button onClick={addCount}> + </Button>
      </div>
      <div className='btn-comprar'>
        <Button
          className='btn-comprar'
          startIcon={<AddShoppingCartIcon />}
          size='large'
          variant='contained'
          color='success'
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
