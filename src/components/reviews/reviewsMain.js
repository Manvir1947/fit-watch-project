import React from "react";
import ReviewsData from "./reviewsData";

const ReviewsMain = () => {
  const productImagesComponents = ReviewsData.map((img) => (
    <img class="customer-img" src={img.src} alt="" />
  ));
  return (
    <section class="reviews">
      <h2 class="reviews-title h2-headings">
        Our goal and vision is only customer satisfaction
      </h2>
      <div class="review-images">{productImagesComponents}</div>
    </section>
  );
};

export default ReviewsMain;
