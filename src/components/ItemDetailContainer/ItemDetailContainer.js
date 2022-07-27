import { useEffect, useState } from 'react';
import { data } from '../../mock/FakeApi';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    data
      .then((res) => setProducto(res.find((item) => item.id === '01')))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);
  return (
    <>
      <div>Detalle del producto</div>
      <div>
        {cargando ? <p>Cargando...</p> : <ItemDetail producto={producto} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
