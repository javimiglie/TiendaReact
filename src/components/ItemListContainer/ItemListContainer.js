import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const ItemListContainer = (props) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensaje, setMensaje] = useState(false);
  const [cargando, setCargando] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productosCollection = collection(db, `productos`);

    if (category) {
      const q = query(productosCollection, where(`category`, `==`, category));
      getDocs(q)
        .then((snapshot) => {
          setListaProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch(() => setMensaje('hubo un error, intente nuevamente más tarde'))
        .finally(() => setCargando(false));
    } else {
      getDocs(productosCollection)
        .then((snapshot) => {
          setListaProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch(() => setMensaje('hubo un error, intente nuevamente más tarde'))
        .finally(() => setCargando(false));
    }
  }, [category]);

  return (
    <div className='container-gral'>
      <p>{props.greeting}</p>
      {mensaje && <p>{mensaje}</p>}
      {cargando ? (
        <CircularProgress />
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
