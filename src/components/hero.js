import React from "react";

const Hero = () => {
  return (
    <section className="intro-form">
      <div id="pre-order"></div>
      <header className="intro">
        <h1 className="slogan">REVOLUTION OF TECHNOLOGY STARTS FROM HERE</h1>
        <p className="description">BE THE PART OF GRANDEUR EXPERIENCE</p>
        <div className="main-img-div">
          <img
            id="main-img"
            src="https://www.pngplay.com/wp-content/uploads/9/Apple-Watch-Transparent-Background.png"
            alt=""
          />
        </div>
      </header>
      <form id="form" action="#">
        <label for="email">
          WHY MORE WAIT TO INITIATE THE FUTURE JUST SIGNUP
        </label>
        <input
          type="email"
          required
          id="email"
          placeholder="Email"
          name="email"
        />
        <input type="submit" id="submit" />
      </form>
    </section>
  );
};

export default Hero;
