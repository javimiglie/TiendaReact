import './Item.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  const { img, name, description, price, stock, id } = producto;
  const onAdd = (cantidad) => {
    if (cantidad > 1) {
      console.log(`Agregaste ${cantidad} items en el carrito`);
    } else {
      console.log(`Agregaste ${cantidad} item en el carrito`);
    }
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
            <Link to={`/productos/${id}`}> Ver Detalle </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Item;
