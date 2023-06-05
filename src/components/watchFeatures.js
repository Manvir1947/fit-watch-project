import React from "react";

const WatchFeatures = () => {
  const featuredImages = [
    "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1638798486317-59c3d2d2bfc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://mms.businesswire.com/media/20220606005746/en/1477304/5/Apple-WWDC22-watchOS-9-hero-220606.jpg?download=1",
  ];

  const featuredImagesElements = featuredImages.map((imgSrc) => (
    <img class="img-feature-3 img-feature" src={imgSrc} />
  ));

  return (
    <section id="features">
      <div class="mobile-app-div">
        <img
          id="mobile-app-img"
          src="https://help.apple.com/assets/6349C6D021306137DD68CBD5/6349C6D721306137DD68CBF4/en_US/518ae4d837c3061af1a61c16f5202f69.png"
          alt=""
        />
        <img
          id="watch-img-features"
          src="https://www.freepnglogos.com/uploads/watch-png/watch-apple-september-announcements-and-filemaker-cimbura-11.png"
          alt=""
        />
      </div>
      <div class="title-feature">
        <h1>WEAR THE COMFORT WITH SERIES 3 FIT</h1>
        <p class="title-feature-description">
          With more battery backup and customisation
        </p>
      </div>
      <div class="feature-grid-imgs">{featuredImagesElements}</div>
    </section>
  );
};

export default WatchFeatures;
