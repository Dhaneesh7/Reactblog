import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./store";

function Cart() {
  const cart = useSelector((state) => state.cart);  // Get cart items
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
