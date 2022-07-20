import './ItemCount.css';
import { useState } from 'react';
import { Button } from '@mui/material';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restCount = () => {
    if (count > initial) {
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
