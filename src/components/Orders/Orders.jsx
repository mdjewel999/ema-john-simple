import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Order_review from "../OrderReview/OrderReview";
import "./Orders.css";
import OrderReview from "../OrderReview/OrderReview";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const saveCart = useLoaderData();

const [cart, setCart] = useState(saveCart)

const handleRemoveCart = (id) =>{
  const remaning = cart.filter(product => product._id !== id)
  setCart(remaning)
  removeFromDb(id)
}

const handleClearCart =() =>{
  setCart([])
  deleteShoppingCart()
}
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <OrderReview 
          key={product._id} 
          product={product}
           handleRemoveCart={handleRemoveCart}
           ></OrderReview>
        ))}
      </div>

      <div className="cart-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
          <Link className='proceed-link'  to="/checkout">
            <button className="btn-proceed">Proceed Checkout
            <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
