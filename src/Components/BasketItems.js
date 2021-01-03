import React from "react";
import basketStyle from "../styles/basketItem.module.css";
import { StateValue } from "../StateProvider/StateProvider";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function BasketItems() {
  const [state, dispatch] = StateValue();

  var items = null;
  if (state.basket) {
    items = state.basket.map((val, i) => {
      return (
        <div className={basketStyle.basket_container} key={i}>
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={val.imgUrl}
              alt="Card image cap"
              style={{ width: "15%", objectFit: "contain", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
            </div>
            <div>
              <button type="button" className="btn btn-outline-danger">
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return <div>{items}</div>;
}
