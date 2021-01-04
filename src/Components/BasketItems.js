import React, { useState } from "react";
import basketStyle from "../styles/basketItem.module.css";
import { StateValue } from "../StateProvider/StateProvider";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function BasketItems() {
  const [state, dispatch] = StateValue();

  const itemDeleteHandler = (e, id) => {
    dispatch({
      type: "Remove Item From Cart",
      item: {
        id: id,
      },
    });
  };

  return (
    <div>
      {state.basket.map((val, i) => {
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
                <button
                  type="button"
                  onClick={(e) => {
                    itemDeleteHandler(e, val.id);
                  }}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
