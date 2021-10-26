import Product from "../Product/Product";
import './Products.css'

function Products({ props }) {
  return (
    <section className="products">
      { props.map(({id, title, price, image}) => (
        <Product key={ id } title = { title } price = { price } image = { image } /> ))
      }

    </section>
  )
}

export default Products;