import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`);
  };
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos' />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;
