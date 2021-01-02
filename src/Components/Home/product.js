import React from "react";
import productStyle from "../../styles/product.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { stateValue } from "../../StateProvider/stateProvider";

export default function product({ title, imgUrl }) {
  const [state, dispatch] = stateValue();

  const AddtocartHandler = () => {
    dispatch({
      type: "AddToCart",
      item: {
        title: title,
        imgUrl: imgUrl,
      },
    });
  };
  return (
    <div className="card" style={{ width: "18rem", margin: "10px 10px" }}>
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
      <img className="card-img-top" src={imgUrl} alt="..." />

      <buton
        className={productStyle.product_adToCartButton}
        onClick={AddtocartHandler}
      >
        Add to cart
      </buton>
    </div>
  );
}
