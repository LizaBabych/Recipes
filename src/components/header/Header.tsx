import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Flag from "../../assets/flag.png";
import Help from "../../assets/help-icon.png";

const Header = () => {
  return (
    <header id="header" className="top-head">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12 left-rs">
              <div className="navbar-header">
                <button
                  type="button"
                  id="top-menu"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <form className="navbar-form navbar-left web-sh">
                <div className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products or companies"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="right-nav">
                <div className="login-sr">
                  <div className="login-signup">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a className="custom-b" href="#">
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="help-r hidden-xs">
                  <div className="help-box">
                    <ul>
                      <li>
                        <a data-toggle="modal" data-target="#myModal" href="#">
                          <span>Change</span> <img src={Flag} alt="flag" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img className="h-i" src={Help} alt="help" />
                          Help
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-b hidden-xs">
                  <div className="nav-box">
                    <ul>
                      <li>
                        <a href="">How it works</a>
                      </li>
                      <li>
                        <Link to="/bucket">My bucket</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
