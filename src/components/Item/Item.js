import './Item.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Item = ({ producto }) => {
  const { img, name, description, price, stock, id } = producto;

  return (
    <Card className='container-card' sx={{ maxWidth: 345 }}>
      <div className='card-item'>
        <div>
          <img className='img-card' src={img} />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <div className='container-btn-detalles'>
          <Button
            className='btn-detalles'
            variant='contained'
            startIcon={<CheckroomIcon />}
            size='large'
          >
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
