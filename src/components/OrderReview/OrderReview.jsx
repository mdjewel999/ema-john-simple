import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./OrderReview.css";
import { useLoaderData } from "react-router-dom";

const OrderReview = ({ product, handleRemoveCart }) => {
  // const product = useLoaderData();

  console.log(product);

  const { id, img, price, name, quantity } = product;

  return (

    <div className="reivewitem">

      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          praice : <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveCart(id)} className="btn-delat">
        {" "}
        <FontAwesomeIcon className="deleat-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default OrderReview;


