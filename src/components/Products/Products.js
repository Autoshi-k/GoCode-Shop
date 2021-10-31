import Product from "../Product/Product";
import './Products.css'

function Products({ filteredItems }) {
  return (
    <section className="products">
      { filteredItems.map(({id, title, price, image}) => (
        <Product key={ id } title = { title } price = { price } image = { image } /> ))
      }

    </section>
  )
}

export default Products;