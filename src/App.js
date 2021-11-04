import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import CartContext from './CartContext';
import CartButton from './components/CartButton/CartButton';


function App() {
  
  const [itemsInfo, setItemsInfo] = useState(['']);
  const [filteredItems, setFilteredItems] = useState(itemsInfo);

  useEffect(() => {
    async function fetchProducts() {
      const prom = await fetch('https://fakestoreapi.com/products');
      setItemsInfo(await prom.json());
    }
    fetchProducts();
  }, []); 
  
  useEffect(() => {
    setFilteredItems(itemsInfo);
  }, [itemsInfo]);
  
  
  const categories =['All', ...itemsInfo.map(item => item.category).filter((value, index, array) => array.indexOf(value) === index)];
  
  const handleFilter = (e) => {
    const selectedFilter = e.target.selectedIndex;
    selectedFilter ? setFilteredItems(itemsInfo.filter(item => item.category === categories[selectedFilter])) : setFilteredItems(itemsInfo);
  }
  
  const [cart, setCart] = useState([0, {}]);
  // const [item, setItem] = useState(['']); NEED TO DELETE FROM SRC TOO

  return (
    <>
      <Header categories= { categories } handleFilter= { handleFilter } />
      <CartContext.Provider value={ [cart, setCart] }>
        {/* <Cart /> */}
        <CartButton />
        <Products filteredItems = { filteredItems }/>
      </CartContext.Provider>
    </>
  );
}

export default App;
