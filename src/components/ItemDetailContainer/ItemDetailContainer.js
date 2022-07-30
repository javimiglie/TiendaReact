import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../mock/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    data
      .then((res) => setProducto(res.find((item) => item.id == id)))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);
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
