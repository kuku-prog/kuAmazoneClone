import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateprovider";
import { auth } from "../../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => { 
    console.log(user);
  },[])
    
    const handlesignOut = () => {
        dispatch({
             type: "SET_USER",
            user: null
        })
    }
  const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className="center">
            <div className="header">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="amazon logo"
                    />
                </Link>

                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__clearlink">
                        <div
                            onClick={handleAuthenticaton}
                            className="header__option"
                        >
                            <span className="header__optionLineOne">
                                Hello {!user ? "Guest" : user}
                            </span>
                            <span className="header__optionLineTwo">
                                {user ? <Link className="header__clearlink" onClick={handlesignOut} to='/login'>Sign Out</Link> :<Link to='/login' className="header__clearlink">Sign IN</Link>}
                            </span>
                        </div>
                    </Link>
                    <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                        <Link to='/orders'>
                            <span className="header__optionLineTwo header__clearlink">& Orders</span>
                        </Link>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                    <Link to="/checkout" className="header__clearlink">
                        <div className="header__optionBasket">
                            <ShoppingCartIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                {basket?.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;