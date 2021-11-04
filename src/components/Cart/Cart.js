import { useContext } from "react";
import CartContext from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

function Cart() {
  
  
  const [[cartSum ,cartItems], setCart] = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <h3>You have { cartSum } items!</h3>
      <div className="cart-items-list">
        { !cartSum && <h4>Nothing to display</h4> }
        { Object.keys(cartItems).map((itemName, index) => <CartItem key={index} itemName={ itemName }/>) } 
      </div>
    </div>
  );
}

export default Cart;