import React from "react";

const FooterMain = () => {
  return (
    <footer class="footer">
      <div class="follow-us">
        <h3>Follow us</h3>
        <div class="social-media-logos">
          <div class="social-md-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </div>
          <div class="social-md-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
          </div>
          <div class="social-md-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
          </div>
          <div class="social-md-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-pinterest"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="8" y1="20" x2="12" y2="11"></line>
              <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
          </div>
          <div class="social-md-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-youtube"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="4"></rect>
              <path d="M10 9l5 3l-5 3z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="terms-conditions">
        <ul class="support">
          <li>
            <h3 class="terms-conditions-heading">SUPPORT</h3>
          </li>
          <li>
            <a href="#">Product Help</a>
          </li>
          <li>
            <a href="#">Wear and Care</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
        <ul class="legal">
          <li>
            <h3 class="terms-conditions-heading">LEGAL</h3>
          </li>
          <li>
            <a href="#">Terms of services</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Ad choices</a>
          </li>
        </ul>
        <ul class="partners">
          <li>
            <h3 class="terms-conditions-heading">PARTNERS</h3>
          </li>
          <li>
            <a href="#">Retailers</a>
          </li>
          <li>
            <a href="#">For developers</a>
          </li>
        </ul>
        <ul class="company">
          <li>
            <h3 class="terms-conditions-heading">COMPANY</h3>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
          <li>
            <a href="#">Press Relations</a>
          </li>
        </ul>
        <ul class="health-solutions">
          <li>
            <h3 class="terms-conditions-heading">HEALTH SOLUTIONS</h3>
          </li>
          <li>
            <a href="#">Employers</a>
          </li>
          <li>
            <a href="#">Health Plans</a>
          </li>
          <li>
            <a href="#">Workforce Health</a>
          </li>
          <li>
            <a href="#">Researchers</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
