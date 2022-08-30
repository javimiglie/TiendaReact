import React, { useContext, useState } from 'react';
import './Checkout.css';
import { Button } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  serverTimestamp,
  getFirestore,
} from 'firebase/firestore';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HomeIcon from '@mui/icons-material/Home';

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [repeatMail, setRepeatMail] = useState('');

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (event) => {
    if (event.target.value === comprador.email) {
      setRepeatMail(true);
    } else setRepeatMail(false);
  };

  const finalizarCompra = (e) => {
    e.preventDefault(e);
    const db = getFirestore();
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    })
      .then((res) => {
        setOrderId(res.id);
        cleanCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!orderId ? (
        <div>
          <h2>Generar número de orden</h2>
          <form onSubmit={finalizarCompra}>
            <div>
              <label>Nombre y Apellido</label>
              <input
                type='text'
                autoFocus
                required
                placeholder='Javier Miglierini'
                name='name'
                onChange={datosComprador}
              ></input>
            </div>
            <div>
              <label>Teléfono</label>
              <input
                type='number'
                required
                placeholder='3513000000'
                name='phone'
                onChange={datosComprador}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type='email'
                required
                placeholder='ejemplo@hotmail.com'
                name='email'
                onChange={datosComprador}
              ></input>
            </div>
            <div>
              <label>Repite tu email</label>
              <input
                type='email'
                required
                placeholder='ejemplo@hotmail.com'
                onChange={validateEmail}
              ></input>
              {!repeatMail ? (
                <div className='mail-danger'>
                  Los emails ingresados deben coincidir
                </div>
              ) : (
                <div className='mail-success'>Los emails coinciden</div>
              )}
            </div>
            <div>
              <Button
                className='btn-fin'
                type='submit'
                variant='contained'
                startIcon={<CreditScoreIcon />}
                size='large'
                disabled={
                  !comprador.email ||
                  !comprador.name ||
                  !comprador.phone ||
                  !repeatMail
                }
              >
                Finalizar compra
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2>Su compra ha sido exitosa</h2>
          <img
            src='https://media.giphy.com/media/GtAuwgj50hqlnjibmy/giphy.gif'
            alt='Compra exitosa'
            width={300}
          ></img>
          <h3>El número de orden es:</h3>
          <p>{orderId}</p>
          <Button
            variant='contained'
            size='large'
            startIcon={<HomeIcon />}
            onClick={() => navigate('/productos')}
          >
            Volver al inicio
          </Button>
        </div>
      )}
    </>
  );
};

export default Checkout;
