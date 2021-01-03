import React from "react";
import Product from "./product";
import homeStyle from "../../styles/home.module.css";
import Himg from "../../assets/images/H1.jpg";

export default function home() {
  return (
    <div className={homeStyle.home_container}>
      <img className={homeStyle.home_img1} src={Himg} alt="..." />
      <div className={homeStyle.home_products}>
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
      </div>
      <div className={homeStyle.home_products}>
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
      </div>
      <div className={homeStyle.home_products}>
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <Product
          title=" Some quick example text to build on the card title and make up the
          bulk of the card's content."
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
      </div>
    </div>
  );
}
