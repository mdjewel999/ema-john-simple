import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // option 3  --props or {cart}
  // const cart = props.cart; // option 1
  // const {cart} = props;  // option 2

  let totalPrice = 0;
  let totalShipping = 0;
  let taxTotal = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  taxTotal = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + taxTotal;

  return (
    <div className="cart">
      <h4>oreder summary</h4>
      <p>Selected Itmes : {cart.length}</p>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping: $ {totalShipping}</p>
      <p>Tax: ${taxTotal.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
