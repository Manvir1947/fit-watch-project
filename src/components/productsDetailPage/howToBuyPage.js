import React from "react";
import CrossSvg from "./crossSvg";
import PhoneIconSvg from "./phoneIconSvg";
import LocationSvg from "./locationSvg";

const HowToBuyPage = ({ setIsHowToBuyPage }) => {
  return (
    <div class="hero-container-how-to-buy">
      <div className="how-to-buy--main-content-div">
        <div
          className="cross-svg-div"
          onClick={() => {
            setIsHowToBuyPage(false);
          }}
        >
          {CrossSvg}
        </div>
        <div className="detail-page-contact-first-img-div ">
          <img
            src="https://images.unsplash.com/photo-1598717873846-0418a74950f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt=""
            className="detail-page-contact-pop-img"
          />
        </div>
        <div className="detail-contact-info-div">
          <h1 className="detail-contact-info-title">Where to Buy</h1>
          <div class="store-list">
            <div class="store">
              <h2 className="store-name">Store 176</h2>
              <div className="svg-and-txt">
                {LocationSvg}
                <p className="contact-txt">888 Midway St.</p>
              </div>
              <div className="svg-and-txt">
                {PhoneIconSvg}
                <p className="contact-txt">555-555-5555</p>
              </div>
              <p>
                <a href="#" className="contact-txt">
                  Visit Website
                </a>
              </p>
            </div>
            <div class="store">
              <h2 className="store-name">Store 543</h2>
              <div className="svg-and-txt">
                {LocationSvg}
                <p className="contact-txt">5374 Main St.</p>
              </div>
              <div className="svg-and-txt">
                {PhoneIconSvg}
                <p className="contact-txt">555-555-5555</p>
              </div>
              <p>
                <a className="contact-txt" href="#">
                  Visit Website
                </a>
              </p>
            </div>
            <div class="store">
              <h2 className="store-name">Store 275</h2>
              <div className="svg-and-txt">
                {LocationSvg}
                <p className="contact-txt">789 Oak St.</p>
              </div>
              <div className="svg-and-txt">
                {PhoneIconSvg}
                <p className="contact-txt">555-555-5555</p>
              </div>
              <p>
                <a className="contact-txt" href="#">
                  Visit Website
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="detail-page-contact-second-img-div ">
          <img
            src="https://images.unsplash.com/photo-1641615873778-787e347cb862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
            className="detail-page-contact-pop-img"
          />
        </div>
        <div className="detail-page-contact-third-img-div ">
          <img
            src="https://images.unsplash.com/photo-1618215649514-c73c18549d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt=""
            className="detail-page-contact-pop-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
