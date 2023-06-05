import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductsData from "../watchProducts/productsData";
import EssentialFeaturingData from "../essentialFeaturing/essentialFeaturingData";
import HowToBuyPage from "./howToBuyPage";

const ProductDetailPage = () => {
  let { id } = useParams();
  const collaborativeData = [...EssentialFeaturingData, ...ProductsData];
  const mainResult = collaborativeData.find((obj) => obj.id == id);
  const [isHowToBuyPage, setIsHowToBuyPage] = useState(false);

  return (
    <section className="product-detail-page-section">
      {isHowToBuyPage && <HowToBuyPage setIsHowToBuyPage={setIsHowToBuyPage} />}
      <header className="logo-name-product-detail-page-header">
        <Link to={"/"} className="logo-name-product-detail-page logo-name">
          Home
        </Link>
      </header>
      <div className="product-detail-divider"></div>
      <div className="product-detail-main-div">
        <h1 className="product-detail-name-of-product">{mainResult.name}</h1>
        <div className="product-detail-all-elements-div">
          <div className="product-detail-img-div">
            <img
              className="product-details-img"
              src={mainResult.img}
              alt="Product Image"
            />
          </div>
          <div className="product-description-div">
            <div className="product-description-flex">
              <h1 className="product-detail-titles">Description</h1>
              <h2 className="product-detail">{mainResult.description}</h2>
            </div>
            <h2 className="product-available product-detail-titles">{`Price: ${mainResult.price}`}</h2>
            <h2 className="product-available product-detail-titles">
              Available:{" "}
              <span className="product-available-answer">
                {mainResult.available}
              </span>
            </h2>
            <div>
              <button
                onClick={() => {
                  setIsHowToBuyPage(true);
                }}
                className="product-detail-buy-button product-detail-titles"
              >
                How to buy?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
