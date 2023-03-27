import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {  // option 3  --props or {cart}
    // const cart = props.cart; // option 1 
    // const {cart} = props;  // option 2
  return (
    <div className="cart">
      <h4>oreder summay</h4>
      <p>Selected Itmes : {cart.length}</p>
      <p>Total Price: </p>
      <p>Total Shipping: </p>
      <p>Tax: </p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
