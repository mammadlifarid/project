import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Item({ img_url, brand, model, description, price }) {
  const [isFavorite, ] = useState(false);

  const handleFavorite = () => {
    const message = isFavorite ? "Removed item from favorites!" : "Added item to favorites successfully!";
    toast.success(message);
   
  };

  const handleAddToCart = () => {
    toast.success("Added item to cart successfully!");
  };

  return (
    <div className="item_div">
      <img src={img_url} alt="item" />
      <div className="item-inner">
        <span>
          <b>{brand} </b>
          {model}
        </span>
        <p>
          <i className="">Specifications:</i> {description}
        </p>
        <p className="price">
          Price: <b>${price}</b>
        </p>
        <div
          className={`add-fav ${isFavorite ? "fav-active" : ""}`}
          id="fav_btn"
          onClick={handleFavorite}
        >
          <i className="fa-regular fa-heart"></i>
          <h2 className="FAVOURITE-h2">
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </h2>
        </div>
        <div className="add-cart" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus" id="cart_btn"></i>
          <h2 className="ADD-CART-h2">Add to cart</h2>
      
        </div>
      </div>
      <ToastContainer className="NotificationContainer" />
    </div>
  );
}
