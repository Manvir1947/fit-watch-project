import React from "react";
import essentialFeaturingData from "./essentialFeaturingData";
import { Link } from "react-router-dom";

const EssentialFeaturingMain = () => {
  const essentialFeaturingElements = essentialFeaturingData.map(
    (product, index) => {
      return (
        <Link className={`essential-div-${index + 1}`} to={`/${product.id}`}>
          <img
            src={product.img}
            class="essential-4 essential-img"
            alt="essential products img"
          />
          <h3 class={`essential-img-txt-${index + 1} essential-txt`}>
            {product.name}
          </h3>
        </Link>
      );
    }
  );
  return (
    <section class="essential" id="essentials">
      <h2 class="essentials-title h2-headings">SMART FIT ESSENTIALS</h2>
      {essentialFeaturingElements}
    </section>
  );
};

export default EssentialFeaturingMain;
