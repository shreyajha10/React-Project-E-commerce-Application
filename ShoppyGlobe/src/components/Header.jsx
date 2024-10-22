import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search";
import { setSearchTerm } from "../utils/cartSlice";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(setSearchTerm(""));
  };

  return (
    <>
      <div className="header">
        <ul className="nav">
          <Link to="/" className="link-sty" onClick={handleHomeClick}>
            <li>Home</li>
          </Link>

          <Link to="/cart" className="link-sty cart-container">
            <li>
              <img
                src="https://icon-library.com/images/shopping-cart-png-icon/shopping-cart-png-icon-28.jpg"
                alt=""
                className="cart-icon"
              />
              <span className="cart-count">{cartItems.length}</span>
              Cart
            </li>
          </Link>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
