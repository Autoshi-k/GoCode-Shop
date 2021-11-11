import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import Range from '../../Context/Range';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Header.css';
// import { MenuItem } from '@mui/material';

function valuetext(value) {
  return `${value}$`;
}


function Header({ categories, handleFilter}) {

  const { priceRange, setPriceRange } = useContext(Range);
  const handleChange = (event, newValue) => setPriceRange(newValue);
    
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

  const [ctegory, setCtegory] = React.useState('All');

  const handleFilterChange = (event) => {
    console.log('am there');
    handleFilter(event);
    setCtegory(event.target.value);
  };

  return (
  <nav className='product-filter'>
    <h1>Jackets</h1>
      <div class="slider">
        <Slider
          getAriaLabel={() => 'Price Range'}
          value={ priceRange }
          onChange={ handleChange }
          valueLabelDisplay="auto"
          getAriaValueText={ valuetext }
          // min='0'
          max='1000'
        />
      </div>
    <div className='sort'>

    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={ ctegory }
          label="Filter by"
          onChange={ handleFilterChange }
        >
          { categories.map(item => <MenuItem key={ item } value={ item }>{ item }</MenuItem>) }
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>

      <div className='collection-sort'>
        {/* <label>Filter by:</label>
        <select onChange= { handleFilter }>
          { categories.map(item => <option key={ item } value={ item }>{ item }</option>) }
        </select> */}
      </div>
      <div className='collection-sort'>
        <label>Sort by:</label>
        <select>
          { sort.map(item => <option key={ item } value={ item }>{ item }</option>) }
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