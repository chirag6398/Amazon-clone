import { CheckBox } from "@material-ui/icons";
import React from "react";
import SubtotalStyle from "../styles/subtotal.module.css";
export default function Subtotal() {
  return (
    <div className={SubtotalStyle.Subtotal_container}>
      <div
        className="card"
        style={{ backgroundColor: "#f8f5f2", color: "#232323" }}
      >
        <div className="card-body">
          <p className="card-text">Subtotal (0:items) : </p>
          <input type="checkbox" />
          <span>add a gift for match</span>
          <br />
          <button
            className="btn btn-dark"
            style={{ display: "flex", flex: "1 1 auto" }}
          >
            CheckOut here
          </button>
        </div>
      </div>
    </div>
  );
}
