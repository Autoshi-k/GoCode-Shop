import { useContext } from "react";
import Product from "../Product/Product";
import './Products.css'
import Range from "../../Context/Range";

function Products({ filteredItems }) {

  const { priceRange } = useContext(Range);

  return (
    <section className="products">
      {/* { filteredItems.map(({id, title, price, image}) => (
        <Product key={ id } title = { title } price = { price } image = { image } /> ))
      } */}
      { filteredItems.map(({id, title, price, image}) => (
        (price >= priceRange[0] && price < priceRange[1]) && <Product key={ id } title = { title } price = { price } image = { image } /> ))
      }

    </section>
  )
}

export default Products;