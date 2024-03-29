import './Item.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Item = ({ producto }) => {
  const navigate = useNavigate();
  const { img, name, description, price, id } = producto;

  return (
    <Card className='container-card' sx={{ maxWidth: 345 }}>
      <div className='card-item'>
        <div>
          <img className='img-card' src={img} alt={name} />
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
            onClick={() => navigate(`/productos/${id}`)}
          >
            Ver Detalle
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Item;
