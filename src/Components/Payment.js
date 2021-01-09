import React from "react";
import paymentStyle from "../styles/payment.module.css";
import { StateValue } from "../StateProvider/StateProvider";
import BasketItems from "./BasketItems.js";
import { useHistory } from "react-router-dom";

export default function Payment() {
  const [state, dispach] = StateValue();
  const history = useHistory();
  return (
    <div className={paymentStyle.payment}>
      <div className={paymentStyle.payment_container}>
        <h1
          onClick={(e) => {
            history.push("/checkout");
          }}
        >
          Checkout ({state.basket?.length} items)
        </h1>
        <div className={paymentStyle.payment_section}>
          <div className={paymentStyle.payment_title}>
            <h3>Delivery address</h3>
          </div>
          <div className={paymentStyle.payment_address}>
            {state.user ? (
              <p>
                {state.user}
                <br />
                kayasthan street, Chandausi
              </p>
            ) : null}
          </div>
        </div>
        <div className={paymentStyle.payment_section}>
          <div className={paymentStyle.payment_tile}>
            <h3>Review your items</h3>
          </div>
          <div className={paymentStyle.payment_items}>
            <BasketItems />
          </div>
        </div>

        <div className={paymentStyle.payment_section}>
          <div className={paymentStyle.payment_tile}>
            <h3>Payment Method</h3>
          </div>
          <div className={paymentStyle.payment_details}></div>
        </div>
      </div>
    </div>
  );
}
