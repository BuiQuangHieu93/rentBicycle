import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-contain">
          <div className="footer-about">
            <div className="footer-about-title">METROPOLE</div>
            <div className="footer-about-deps">Who are you?</div>
            <div className="footer-about-deps">Discover me</div>
            <div className="btn-contain">
              <div className="footer-about-btn">
                <div className="footer-about-btn-name">Learn More</div>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-title">CONTACT</div>
            <div className="footer-contact-type">Product</div>
            <div className="footer-contact-name">Code-demo</div>
            <div className="footer-contact-mail">
              ITITIU18286@student.hcmiu.edu.vn
            </div>
          </div>
        </div>
        <div className="white-line"></div>
        <div className="download-app">Download the app</div>
        <div className="download-link-contain">
          <div className="download-btn footer-about-btn">
            <a className="download-btn-name" href="https://www.apple.com/vn/app-store/">IOS</a>
          </div>
          <div className="download-btn footer-about-btn">
            <a className="download-btn-name" href="https://play.google.com/store/">ANDROID</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
