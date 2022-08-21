import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  serverTimestamp,
  getFirestore,
} from 'firebase/firestore';

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(``);

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
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
          <h2>Checkout</h2>
          <form onSubmit={finalizarCompra}>
            <input
              type='text'
              required
              placeholder='Nombre y Apellido'
              name='name'
              onChange={datosComprador}
            ></input>
            <input
              type='number'
              required
              placeholder='Número de teléfono'
              name='phone'
              onChange={datosComprador}
            ></input>
            <input
              type='email'
              required
              placeholder='Email'
              name='name'
              onChange={datosComprador}
            ></input>
            <Button type='submit'>Finalizar compra</Button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Su compra ha sido exitosa</h2>
          <h3>Su orden es: {orderId}</h3>
          <Button onClick={() => navigate('/productos')}>
            Volver a inicio
          </Button>
        </div>
      )}
    </>
  );
};

export default Checkout;
