import { useEffect, useState, useContext } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import CartContext from './CartContext';
import CartButton from './components/CartButton/CartButton';
import Range from './Context/Range';
import TEST from './test';


function App() {
  
  const [itemsInfo, setItemsInfo] = useState(['']);
  const [filteredItems, setFilteredItems] = useState(itemsInfo);
  // const priceRange = useContext(Range);

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
  
  
  const categories = ['All', ...itemsInfo.map(item => item.category).filter((value, index, array) => array.indexOf(value) === index)];
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === 'All') {
      setFilteredItems(itemsInfo);
    } else {
      setFilteredItems(itemsInfo.filter(item => item.category === selectedFilter))
    }
  }
  
  const [cart, setCart] = useState([0, {}]);
  // const [item, setItem] = useState(['']); NEED TO DELETE FROM SRC TOO

  return (
    <>
    <Range.Provider value={ {priceRange, setPriceRange} }>
      <Header categories= { categories } handleFilter= { handleFilter } />
      <CartContext.Provider value={ [cart, setCart] }>
        <CartButton />
        <Products filteredItems = { filteredItems }/>
      </CartContext.Provider>
    </Range.Provider> 
    </>
  );
}

export default App;
