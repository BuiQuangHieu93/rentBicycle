import React, { Fragment } from "react";
import "../index.css";

const Heading = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <Fragment>
      <div className="heading-bar">
        <div className="Navbar">
          <ul className="NavItem">
            <a className="NavLink" href="./">
              Discover
            </a>
          </ul>
          <ul className="NavItem">
            <a className="NavLink" href="./subscribe">
              Subscribe
            </a>
          </ul>
          <ul className="NavItem">
            <a className="NavLink" href="./map">
              Map of station
            </a>
          </ul>
          <ul className="NavItem">
            <a className="NavLink" href="./news">
              News
            </a>
          </ul>
          <ul className="NavItem">
            <a className="NavLink" href="./contact">
              Contact
            </a>
          </ul>
        </div>
        <div className="Login-btn">
          {user ? (
            <ul className="list">
              <li className="listItem">
                <img src={user.photos[0].value} alt="" className="avatar" />
              </li>
              <li className="listItem">{user.displayName ? <span>{user.displayName}</span> : <span>{user.username}</span>}</li>
              <li className="listItem" onClick={logout}>
                Logout
              </li>
            </ul>
          ) : (
            <a className="link" href="./login">
              To Login
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Heading;
