import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Welcome from './components/Welcome/Welcome';


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
  
  return (
    <>
      <Welcome/>
      <Header categories= { categories } handleFilter= { handleFilter } />
      <Products filteredItems = { filteredItems }/>
    </>
  );
}

export default App;
