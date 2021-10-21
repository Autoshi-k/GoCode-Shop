import './Product.css';

function Product(itemInfo) {
  return (
    <div className="product-card">
        <div className="product-image">
          <img
            src={ itemInfo.src }
          />
        </div>
        <div className="product-info">
          <h5>{ itemInfo.name }</h5>
          <h6>{ itemInfo.price }</h6>
        </div>
      </div>
  );
}

export default Product;