import './Header.css';

function Header() {
  
  const filter = [
    'All Jackets', 
    '2016', 
    'jacket', 
    'Jackets', 
    'layers',
    'Obermeyer', 
    'Roxy',
    'Womens'
  ]
;  
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
        <select>
          { filter.map(item => <option value='/'>{ item }</option>) }
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