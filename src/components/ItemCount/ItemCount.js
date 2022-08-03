import './ItemCount.css';
import { Button } from '@mui/material';

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
          variant='contained'
          color='primary'
          onClick={() => onAdd(count)}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
