import React from "react";

const MannualVideo = () => {
  return (
    <section class="video" id="mannual-video">
      <h2 class="h2-headings video-title">Full mannual is available here</h2>
      <iframe
        id="video"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/PND0lokglyU"
        title="Digital watch and how does it work"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default MannualVideo;
