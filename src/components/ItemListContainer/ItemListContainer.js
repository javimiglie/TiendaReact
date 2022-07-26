import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { data } from '../../mock/FakeApi';

const ItemListContainer = (props) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensaje, setMensaje] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setListaProductos(res))
      .catch(() => setMensaje('hubo un error, intente nuevamente más tarde'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <p>{props.greeting}</p>
      {mensaje && <p>{mensaje}</p>}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
