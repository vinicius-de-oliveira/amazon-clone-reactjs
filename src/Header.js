import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header(props) {

  const getCount = () => {
    let count = 0;
    props.cartItems.forEach((item) => {
      count += item.cartItem.quantity 
    })
    return count;
  }

  return (
    <div className="Header">
      {/* Logo */}
      <Link to="/">
        <div className="Header-logo">
          <img
            src={   
              "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            }
            alt=""
          />
        </div>
      </Link>
      {/* Address */}
      <div className="Header-optionAddress">
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello, </span>
          <span className="Header-optionLineTwo">Select your address</span>
        </div>
      </div>
      {/* Search */}
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Header-navItems">
        {/* Login name */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello, Belchior</span>
          <span className="Header-optionLineTwo">Account & Lists</span>
        </div>
        {/* Orders */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">& Orders</span>
        </div>
        {/* Cart */}
        <Link to="/cart">
          <div className="Header-optionCart">
            <ShoppingBasketIcon />
            <span className="Header-cartCount">{getCount()}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
