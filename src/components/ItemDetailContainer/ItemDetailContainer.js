import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();

    const productoRef = doc(db, `productos`, id);
    getDoc(productoRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setProducto(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setCargando(false));
  }, [id]);

  return (
    <>
      <div>
        {cargando ? <p>Cargando...</p> : <ItemDetail producto={producto} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
