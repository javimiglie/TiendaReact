import './Item.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ producto }) => {
  const { img, name, description, price, stock } = producto;

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items en el carrito`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='card-item'>
        <div>
          <img className='img-card' src={img} />
        </div>
        <p>{name}</p>
        <p>{description}</p>
        <span>${price}</span>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        <div className='container-btn-detalles'>
          <Button className='btn-detalles' variant='outlined'>
            Detalles
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Item;
