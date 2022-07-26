import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { data } from '../../mock/FakeApi';

const ItemListContainer = (props) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setListaProductos(res))
      .catch(() => console.log('hubo un error'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <p>{props.greeting}</p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
