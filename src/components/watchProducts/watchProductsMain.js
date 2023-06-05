import React from "react";
import allFeatureSvgs from "./allFeatureSvgs";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const WatchProductsMain = () => {
  const productsElements = productsData.map((product) => {
    const featureLinkEle = [];
    let counter = 0;

    for (const key in product) {
      let productClass = "";
      if (key == "price") {
        productClass = key;
      } else if (key == "size") {
        productClass = "watch-size";
      } else {
        productClass = "product-feature";
      }
      if (counter > 2) {
        featureLinkEle.push(
          <li className={productClass}>
            {/* svg */}
            {allFeatureSvgs[counter]}
            <p>{product[key]}</p>
          </li>
        );
      }
      counter++;
    }

    return (
      <Link to={`/${product.id}`} class="product-link first-product product">
        <figure>
          <a href="productPage1.html">
            <img src={product.img} alt="Product Image" />
            <figcaption className="photo-caption">{product.name}</figcaption>
          </a>
        </figure>
        <ul className="product-features-ul">{featureLinkEle}</ul>
      </Link>
    );
  });
  return <section id="products">{productsElements}</section>;
};

export default WatchProductsMain;
