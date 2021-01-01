import React from "react";
import productStyle from "../../styles/product.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function product() {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px 10px" }}>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <img
        className="card-img-top"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        alt="..."
      />

      <buton className={productStyle.product_adToCartButton}>Add to cart</buton>
    </div>
  );
}
