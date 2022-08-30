import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NotFound = () => {
  return (
    <div>
      <h2>Tu búsqueda no arrojó ningún resultado</h2>
      <p>A continuación te mostramos los productos de nuestra Tienda:</p>
      <ItemListContainer />
    </div>
  );
};

export default NotFound;
