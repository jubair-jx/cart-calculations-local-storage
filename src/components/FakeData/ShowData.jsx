import React from "react";
import { addToCart } from "../utilities/fakeDB";
import "./ShowData.css";
const ShowData = (props) => {
  const { name, model, price, id } = props;
  const addTocart = (id) => {
    console.log("item added", id);
    addToCart(id);
  };
  return (
    <div className="showData">
      <h2>Brand Name :{name} </h2>
      <h4>Brand Model :{model} </h4>
      <p>Price : $ {price} </p>
      <button onClick={() => addTocart(id)}>Add To Cart</button>
    </div>
  );
};

export default ShowData;
