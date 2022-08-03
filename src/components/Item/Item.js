import './Item.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  const { img, name, description, price, stock, id } = producto;

  return (
    <Card className='container-card' sx={{ maxWidth: 345 }}>
      <div className='card-item'>
        <div>
          <img className='img-card' src={img} />
        </div>
        <p>{name}</p>
        <p>{description}</p>
        <span>${price}</span>
        <div className='container-btn-detalles'>
          <Button className='btn-detalles' variant='outlined'>
            <Link className='link-d' to={`/productos/${id}`}>
              Ver Detalle
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Item;
