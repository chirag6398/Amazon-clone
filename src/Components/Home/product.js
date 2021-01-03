import React from "react";
import productStyle from "../../styles/product.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StateValue } from "../../StateProvider/StateProvider";

export default function product({ title, imgUrl }) {
  const [state, dispatch] = StateValue();

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
    <div className={productStyle.product_card}>
      <div className="card">
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
    </div>
  );
}
