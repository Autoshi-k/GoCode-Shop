import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../CartContext";
import Product from "../Product/Product";
import './Counter.css';

function Counter({ itemInfo }) {
  
  const [amountProduct, setAmountProduct] = useState(0);
  const [[cartSum ,cartItems], setCart] = useContext(CartContext);

  const title = cartItems[itemInfo.title];


  function addToCart(addOrReduce) {
    setAmountProduct(amountProduct + addOrReduce)
    setCart(
      [cartSum + addOrReduce, {
        ...cartItems,
        [itemInfo.title]: {
          title: itemInfo.title,
          src: itemInfo.image,
          price: itemInfo.price,
          amount: amountProduct + addOrReduce
        }
      }]
    );
  };


  return (
    <div className="counter">
      <div className="counter-container">
        <div className="counter-btn remove" onClick={ () => amountProduct && addToCart(-1) }>-</div>
        <div className="product-to-add">{ title ? title.amount : 0 }</div>
        <div className="counter-btn add" onClick={ () => addToCart(1) }>+</div>
      </div>
    </div>
  );
}

export default Counter;