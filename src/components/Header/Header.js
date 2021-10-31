import './Header.css';

function Header({ categories, handleFilter}) {

  const sort = [
    'Featured', 
    'Best Selling', 
    'Alphabetically, A-Z', 
    'Alphabetically, Z-A', 
    'Price, low to high',
    'Price, high to low', 
    'Date, new to old',
    'Date, old to new'
  ]

  return (<nav className='product-filter'>
    <h1>Jackets</h1>
    <div className='sort'>
      <div className='collection-sort'>
        <label>Filter by:</label>
        <select onChange= { handleFilter }>
          { categories.map(item => <option value='/'>{ item }</option>) }
        </select>
      </div>
      <div className='collection-sort'>
        <label>Sort by:</label>
        <select>
          { sort.map(item => <option value='/'>{ item }</option>) }
        </select>
      </div>
    </div>
  </nav>)
}

export default Header;







// import { iseState } from 'react';
//  useState() ([value, setValue])
//                      value = newValue
//                      rerender()



// return {
// ...todo, completed: true
//} returning new obj with new completed attribute