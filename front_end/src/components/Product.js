import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./product.css";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className=" product">
      <img className="medium" src={product.image} alt={product.name} />

      <div className="product_info">
        <p className="tittle">{product.name}</p>
        <p className="product_price">
          <span>KSh {product.price} </span>
        </p>
        <div className="rating">
          <Link to={`/product/${product._id}`}>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </Link>
        </div>
        <div>
          <Link to={`/seller/${product.seller._id}`}>
            {product.seller.seller.name}
          </Link>
        </div>
      </div>
      <div className="button">
        <Link to={`/product/${product._id}`}>
          <button className="click_button">BuyNow</button>
        </Link>
      </div>
    </div>
  );
}
