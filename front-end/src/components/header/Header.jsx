import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useStateValue } from "../../stateprovider";
import axios from "axios";

import './header.css'
import { Link, useNavigate } from "react-router-dom";

//icons
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PlaceIcon from "@mui/icons-material/Place";
import { color } from "@mui/system";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();
  const navigator = useNavigate();

  // setting current city and postal using api
  useEffect(() => {    
    axios
      .get("https://ipinfo.io/json?token=9792e4a0d74241")
      .then((response) => {
        setCity(response.data.city);
        setPostal(response.data.postal);
      });
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // check if the user is logged in and handle authentication
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      // handleSignOut();
        // navigator('/');
    } else { 
      navigator('/login');
    }
  };

  const handleSignOut = () => {
    dispatch({
      type: "SET_USER",
      user: null
    });
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          onClick={scrollToTop}
        />
      </Link>
      <div className="header__location">
        <PlaceIcon />
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">
          Deliver to {!user ? "you" : user.email}
        </span>
        <span className="header__optionLineTwo">
          {city} {postal}
        </span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearLink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearLink" onClick={scrollToTop}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link
          to="/checkout"
          className="header__clearLink"
          onClick={scrollToTop}
        >
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;