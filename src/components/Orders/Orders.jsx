import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Order_review from "../OrderReview/OrderReview";
import "./Orders.css";
import OrderReview from "../OrderReview/OrderReview";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();

const [cart, setCart] = useState(saveCart)

const handleRemoveCart = (id) =>{
  const remaning = cart.filter(product => product.id !== id)
  setCart(remaning)
  removeFromDb(id)
}

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <OrderReview 
          key={product.id} 
          product={product}
           handleRemoveCart={handleRemoveCart}
           ></OrderReview>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
