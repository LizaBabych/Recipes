import React from "react";
import Logo from "../../assets/logo.png";
import Flag from "../../assets/flag.png";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="footer-top clearfix">
              <div className="col-md-2 col-sm-6">
                <h2>Start a free account today</h2>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-box">
                  <input type="text" placeholder="Enter yopur e-mail" />
                  <button>Continue</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="help-box-f">
                  <h4>Question? Call us on 12 34 56 78 for help</h4>
                  <p>
                    Easy setup - no payment fees - up to 100 products for free
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-link-box clearfix">
              <div className="col-md-6 col-sm-6">
                <div className="left-f-box">
                  <div className="col-sm-4">
                    <h2>SELL ON chamb</h2>
                    <ul>
                      <li>
                        <a href="/">Create account</a>
                      </li>
                      <li>
                        <a href="/">How it works suppliers</a>
                      </li>
                      <li>
                        <a href="/">Pricing</a>
                      </li>
                      <li>
                        <a href="/">FAQ for Suppliers</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <h2>BUY ON chamb</h2>
                    <ul>
                      <li>
                        <a href="/">Create account</a>
                      </li>
                      <li>
                        <a href="/">How it works buyers</a>
                      </li>
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">FAQ for buyers</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <h2>COMPANY</h2>
                    <ul>
                      <li>
                        <a href="/">About chamb</a>
                      </li>
                      <li>
                        <a href="/">Contact us</a>
                      </li>
                      <li>
                        <a href="/">Press</a>
                      </li>
                      <li>
                        <a href="/">Careers</a>
                      </li>
                      <li>
                        <a href="/">Terms of use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="right-f-box">
                  <h2>INDUSTRIES</h2>
                  <ul className="col-sm-4">
                    <li>
                      <a href="/">Textiles</a>
                    </li>
                    <li>
                      <a href="/">Furniture</a>
                    </li>
                    <li>
                      <a href="/">Leather</a>
                    </li>
                    <li>
                      <a href="/">Agriculture</a>
                    </li>
                    <li>
                      <a href="/">Food & drinks</a>
                    </li>
                  </ul>
                  <ul className="col-sm-4">
                    <li>
                      <a href="/">Office</a>
                    </li>
                    <li>
                      <a href="/">Decoratives</a>
                    </li>
                    <li>
                      <a href="/">Electronics</a>
                    </li>
                    <li>
                      <a href="/">Machines</a>
                    </li>
                    <li>
                      <a href="/">Building</a>
                    </li>
                  </ul>
                  <ul className="col-sm-4">
                    <li>
                      <a href="/">Cosmetics</a>
                    </li>
                    <li>
                      <a href="/">Health</a>
                    </li>
                    <li>
                      <a href="/">Jewelry</a>
                    </li>
                    <li>
                      <a href="/">See all here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>
                <img
                  width="90"
                  src={Logo}
                  alt="logo"
                  style={{ marginTop: "-5px" }}
                />
                All Rights Reserved. Company Name © 2018
              </p>
            </div>
            <div className="col-md-4">
              <ul className="list-inline socials">
                <li>
                  <a href="/">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <ul className="right-flag">
                <li>
                  <a href="#">
                    <img src={Flag} alt="flag" /> <span>Change</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
