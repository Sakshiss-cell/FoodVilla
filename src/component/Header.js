import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <Link to="/" style={{"text-decoration": "none"}}>
      <h3>FOOD VILLAA</h3>
      </Link>
      <Link to="./instamart">
        <h4>Instamart</h4>
      </Link>
      <p>
        {user.name}
        {/* {user.email} */}
      </p>
      <div
        className={`menu-icon ${showMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${showMenu ? "open" : ""}`}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:'center',
            
          }}
        >
          <Link to="/" onClick={toggleMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={toggleMenu} >
            <li>Contact</li>
          </Link>
          <Link to="/cart" onClick={toggleMenu}>
            <li>Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
