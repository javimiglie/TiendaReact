import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../mock/FakeApi';

const ItemListContainer = (props) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensaje, setMensaje] = useState(false);
  const [cargando, setCargando] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    data
      .then((res) => {
        if (!category) {
          setListaProductos(res);
        } else {
          setListaProductos(res.filter((item) => item.category == category));
        }
      })
      .catch(() => setMensaje('hubo un error, intente nuevamente más tarde'))
      .finally(() => setCargando(false));
  }, [category]);

  return (
    <div className='container-gral'>
      <p>{props.greeting}</p>
      {mensaje && <p>{mensaje}</p>}
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
