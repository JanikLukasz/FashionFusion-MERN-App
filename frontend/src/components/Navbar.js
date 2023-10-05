import { Link } from "react-router-dom";
import FFLogo from "../assets/FF_logo.png";
import { useMenubar } from "../contextHooks/UseMenubarContext";
import { useCurrentGenderContext } from "../contextHooks/UseCurrentGenderContext";
import { useMiniCartContext } from "../contextHooks/UseMiniCartContext";
import { useCart } from "../contextHooks/UseCartContext";

const Navbar = () => {
  const { menubarIsActive, handleMenubarClick } = useMenubar();
  const { isCurrentGenderWomen, handleGenderClick } = useCurrentGenderContext();
  const { miniCartActive, handleMiniCartActive } = useMiniCartContext();
  const { cart } = useCart();

  const handleClickOnCartIcon = () => {
    if (menubarIsActive) {
      handleMenubarClick();
    }
    handleMiniCartActive();
  };

  const handleClickOnMenubar = () => {
    if (miniCartActive) {
      handleMiniCartActive();
    }
    console.log(miniCartActive);
    handleMenubarClick();
  };

  const handleClickOutsideOfMenubarOrMiniCartIcon = () => {
    if (miniCartActive) {
      handleMiniCartActive();
    }
    if (menubarIsActive) {
      handleMenubarClick();
    }
  };

  return (
    <div className="navbar-wrapper">
      <div
        className={
          menubarIsActive || miniCartActive
            ? "navbar-container active"
            : "navbar-container"
        }
      >
        <div className="navbar-content-1">
          <Link
            to="/Promotions"
            onClick={handleClickOutsideOfMenubarOrMiniCartIcon}
          >
            <div className="navbar-content-div">
              <div>
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>
              </div>
              <p>CHECK OUR PROMOTIONS</p>
              <div>
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-content-2">
          <div className="logo-container-1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Link
              className="logo-1"
              to="/"
              onClick={handleClickOutsideOfMenubarOrMiniCartIcon}
            >
              <h1>Fashion Fusion</h1>
            </Link>
          </div>
          <div className="menubar-container">
            <button
              onClick={handleClickOnMenubar}
              className={`mobile-menubar ${menubarIsActive ? "active" : ""}`}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>

            <button
              onClick={handleClickOnMenubar}
              className={`desktop-menubar ${menubarIsActive ? "active" : ""}`}
            >
              <div>
                <h1>Categories</h1>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </button>
          </div>

          <div className="navbar-gender-container" onClick={handleGenderClick}>
            <span className="material-symbols-outlined">expand_less</span>
            <div>{isCurrentGenderWomen ? "Women" : "Man"}</div>
            <span className="material-symbols-outlined">expand_more</span>
          </div>

          <div className="logo-container-2">
            <Link
              className="logo-2"
              to="/"
              onClick={handleClickOutsideOfMenubarOrMiniCartIcon}
            >
              <img src={FFLogo} alt="" />
            </Link>
          </div>

          <div className="search-icon-container" to="/Search">
            <span className="material-symbols-outlined">search</span>
          </div>
          <button
            className="shoppingcart-icon-container"
            onClick={handleClickOnCartIcon}
          >
            <div
              className={`mini-cart-exit-button ${
                miniCartActive ? "active" : ""
              }`}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className={`mini-cart-incon ${miniCartActive ? "" : "active"}`}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              <p className={`items-in-cart ${cart.length > 0 ? "active" : ""}`}>
                {cart.length}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
