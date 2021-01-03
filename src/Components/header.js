import React from "react";
import headerStyle from "../styles/header.module.css";
import logo from "../assets/images/amazonLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateValue } from "../StateProvider/StateProvider";

export default function header() {
  const [state, dispatch] = StateValue();

  return (
    <div className={headerStyle.header}>
      <Link to="/">
        <img className={headerStyle.header_logo} src={logo} alt="..." />
      </Link>

      <div className={headerStyle.header_search}>
        <input className={headerStyle.header_input} type="text"></input>
        <SearchIcon className={headerStyle.header_searchIcon} />
      </div>

      <div className={headerStyle.header_nav}>
        <div className={headerStyle.header_option}>
          <span className={headerStyle.header_optionLineOne}>Hello, guest</span>
          <span className={headerStyle.header_optionLineTwo}>sign,in</span>
        </div>

        <div className={headerStyle.header_option}>
          <span className={headerStyle.header_optionLineOne}>return</span>
          <span className={headerStyle.header_optionLineTwo}>& Orders</span>
        </div>

        <div className={headerStyle.header_option}>
          <span className={headerStyle.header_optionLineOne}>your</span>
          <span className={headerStyle.header_optionLineTwo}>prime</span>
        </div>

        <Link to="/checkout">
          {" "}
          <div
            classname={headerStyle.header_optionBasket}
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <ShoppingBasketIcon />
            <span
              className={headerStyle.header_optionLineTwo}
              style={{ margin: "0px 3px" }}
            >
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
