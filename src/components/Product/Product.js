import './Product.css';

function Product(itemInfo) {
  return (
    <div className="product-card">
        <div className="product-image">
          <img
            src={ itemInfo.image }
          />
        </div>
        <div className="product-info">
          <h5>{ itemInfo.title }</h5>
          <h6>${ itemInfo.price }</h6>
        </div>
      </div>
  );
}

// const obj = {name: "sdfsdf", age: 40};

// const {name, age} = obj;

export default Product;