import React from "react";
import Product from "./product";
import homeStyle from "../../styles/home.module.css";
import Himg from "../../assets/images/H1.jpg";

export default function home() {
  return (
    <div className={homeStyle.home_container}>
      <img className={homeStyle.home_img1} src={Himg} alt="..." />
      <div className={homeStyle.home_products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={homeStyle.home_products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={homeStyle.home_products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
