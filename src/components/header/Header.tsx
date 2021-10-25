import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../assets/logo.png";
import Flag from "../../assets/flag.png";
import Help from "../../assets/help-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { SetSearchItemAct } from "../../store/search/search.actions";
import { AppState } from "../../store/state";

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: AppState) => state.search.searchValue
  );
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(SetSearchItemAct(e.target.value.toLowerCase()));
  };

  return (
    <header id="header" className="top-head">
      <nav className="navbar navbar-default">
        <div className="right-nav">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="logo" />
          </Link>
          <input
            value={searchValue}
            type="text"
            className="form-control"
            placeholder="Search dish"
            onChange={changeHandler}
          />
        </div>
        <div className="right-nav">
          <div className="nav-box">
            <ul>
              <li>
                <span>How it works</span>
              </li>
              <li>
                <Link to="/bucket">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="help-box">
            <ul>
              <li>
                <span data-toggle="modal" data-target="#myModal">
                  <span>Change</span> <img src={Flag} alt="flag" />
                </span>
              </li>
              <li>
                <span>
                  <img className="h-i" src={Help} alt="help" />
                  <span> Help </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="login-sr">
            <div className="login-signup">
              <ul>
                <li>
                  <span>Login</span>
                </li>
                <li>
                  <span className="custom-b">Sign up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
