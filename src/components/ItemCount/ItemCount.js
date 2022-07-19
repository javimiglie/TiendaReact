import { useState } from 'react';
import { Button } from '@mui/material';

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(5);

  const addCount = () => {
    if (count < 5) {
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
      <div className='button-item'>
        <Button onClick={restCount}> - </Button>
        <p> {count} </p>
        <Button onClick={addCount}> + </Button>
      </div>
      <Button variant='contained' color='primary'>
        Comprar
      </Button>
    </div>
  );
};

export default ItemCount;
