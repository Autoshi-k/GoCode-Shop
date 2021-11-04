import { useContext } from "react";
import CartContext from "../../CartContext";
import './CartItem.css';

function CartItem({key, itemName}) {

  const [[cartSum ,cartItems], setCart] = useContext(CartContext);
  
  return (
    <div className="cart-item" key={ key }>
      <img src={cartItems[itemName].src} alt={itemName} />
      <div className="cart-item-details">
        <h5>{ cartItems[itemName].title }</h5>
        <h6>${ cartItems[itemName].price }</h6>
      </div>
      <span>{ cartItems[itemName].amount }</span>
    </div>
  );
}

export default CartItem;