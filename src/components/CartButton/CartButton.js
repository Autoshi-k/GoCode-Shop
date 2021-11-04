import { useState } from 'react';
import './CartButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import CartContext from "../../CartContext";
import Cart from '../Cart/Cart';

function CartButton() {
  
  const [cartBtn, setCartBtn] = useState(true);
  const [[cartSum ,cartItems], setCart] = useContext(CartContext);


  return (
    <div className="cart-button">
      { cartBtn && <Cart /> }
      <div className="number-of-items" style={{display: cartSum ? 'flex' : 'none'}}>{ cartSum }</div>
      <button onClick={ () => setCartBtn(!cartBtn) }><FontAwesomeIcon icon={ faShoppingCart } size="2x" /></button>
    </div>
  );
}

export default CartButton;