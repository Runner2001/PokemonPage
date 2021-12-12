import React from "react";

function Footer() {
  return (
    <footer>
      <div className="first">
        <h3>our pokemon service</h3>
        <ul className="service">
          <li>what new?</li>
          <li>our service?</li>
          <li>about our company?</li>
        </ul>
      </div>
      <div className="second">
        <h3>social</h3>
        <ul className="social">
          <li>
            <i className="fab fa-facebook-square"></i>www.facebook.com
          </li>
          <li>
            <i className="fab fa-twitter-square"></i>www.twitter.com
          </li>
          <li>
            <i className="fab fa-youtube-square"></i>www.youtube.com
          </li>
          <li>
            <i className="fab fa-pinterest-square"></i>www.pinterest.com
          </li>
        </ul>
      </div>
      <div className="third">
        <h3>
          pokemon<span> company</span>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
