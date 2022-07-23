import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { data } from '../../mock/FakeApi';

const ItemListContainer = (props) => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    data
      .then((res) => setListaProductos(res))
      .catch(() => console.log('hubo un error'))
      .finally(() => console.log(`finalizó`));
  }, []);

  return (
    <div>
      <p>{props.greeting}</p>
      <ItemList listaProductos={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
