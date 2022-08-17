import './Cart.css';
import Modal from '../Modal/Modal';
import ItemCart from '../ItemCart/ItemCart';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: ``,
    phone: ``,
    email: ``,
    adress: ``,
  });
  const [order, setOrder] = useState({
    buyer: {},
    items: cart.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        title: item.name,
        price: item.price,
      };
    }),
    total: totalPrice(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  if (cart.length === 0) {
    return (
      <>
        <p>El carrito está vacio</p>

        <Button onClick={() => navigate('/productos')}>Ir a comprar</Button>
      </>
    );
  }
  return (
    <div>
      {cart.map((productos) => (
        <ItemCart key={productos.id} productos={productos} />
      ))}
      {console.log('order', order)}
      <p> Total: ${totalPrice()}</p>
      <Button color='primary' variant='contained' onClick={cleanCart}>
        Borrar Carrito
      </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setShowModal(true)}
      >
        Completar compra
      </Button>
      <Modal
        title='Formulario de contacto'
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        <form className='form-contact' onSubmit={handleSubmit}>
          <TextField
            className='text-field'
            id='outlined-basic'
            name='name'
            label='Nombre y Apellido'
            variant='outlined'
            value={formValue.name}
            onChange={handleChange}
          />
          <TextField
            className='text-field'
            id='outlined-basic'
            name='adress'
            label='Dirección'
            variant='outlined'
            value={formValue.adress}
            onChange={handleChange}
          />
          <TextField
            className='text-field'
            id='outlined-basic'
            name='phone'
            label='Teléfono'
            variant='outlined'
            value={formValue.phone}
            onChange={handleChange}
          />
          <TextField
            className='text-field'
            id='outlined-basic'
            name='email'
            label='Mail'
            variant='outlined'
            value={formValue.email}
            onChange={handleChange}
          />
          <Button
            className='btn-send-form'
            color='primary'
            variant='contained'
            type='submit'
          >
            Enviar
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Cart;
