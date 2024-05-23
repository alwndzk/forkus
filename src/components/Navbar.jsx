/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/require-default-props */
// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

function Navbar({ authUser, logOut }) {
  const { name, email, avatar } = authUser || {
    name: "",
    email: "",
    avatar: "",
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#E1F7F5", display: "flex", justifyContent: "space-between" }}>
      <ul>
        <li id="img">
          <div className="user-profile-nav">
            {authUser && <img src={avatar} alt={email} title={name} />}
          </div>
        </li>
        <li id="home">
          <Link to="/" data-testid="home-link">HOME</Link>
        </li>
      </ul>
      <li>
        <button type="button" id="logout" className="btn btn-dark rounded-pill" onClick={logOut}>
          <FiLogOut />
        </button>
      </li>
    </nav>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  logOut: PropTypes.func.isRequired,
};

export default Navbar;
