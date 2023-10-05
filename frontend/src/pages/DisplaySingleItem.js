import useFetchSingleItem from "../hooks/useFetchSingleItem.js";
import DisplayPath from "../components/DisplayPath";
import { useState } from "react";
import { useCart } from "../contextHooks/UseCartContext";
import { Link } from "react-router-dom";

const DisplaySingleItem = () => {
  const { item } = useFetchSingleItem();
  const [indexOfImage, setIndexOfImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [displayErrorSizeNotSelected, setDisplayErrorSizeNotSelected] =
    useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const { addToCart } = useCart();

  const handleIndexOfImage = (index) => {
    setIndexOfImage(index);
  };

  const handleAddToCartButton = () => {
    addToCart([item._id, item.images[0], item.name, selectedSize, item.price]);
    setItemAdded(true);
  };

  const handleDisplayErrorSizeNotSelected = () => {
    Object.keys(item.sizes).find((size) => item.sizes[size] === true)
      ? setDisplayErrorSizeNotSelected(true)
      : setDisplayErrorSizeNotSelected(false);
  };

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
    setDisplayErrorSizeNotSelected(false);
  };

  if (item) {
    return (
      <div className="display-single-item-container">
        <DisplayPath />
        <div className="display-single-item-content-container">
          <div className="display-single-item-content-wrap">
            <div className="display-single-item-image">
              <div className="main-image">
                <img src={item.images[indexOfImage]} alt=""></img>
              </div>
            </div>

            <div className="single-item-name-and-price-container">
              <div className="single-item-name-and-price">
                <div className="additional-images">
                  {item.images.map((image, index) => (
                    <div
                      key={index}
                      className={`additional-image ${
                        index === indexOfImage ? "active" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        onClick={() => handleIndexOfImage(index)}
                      ></img>
                    </div>
                  ))}
                </div>

                <h1>{item.name}</h1>
                <div className="single-item-price">
                  <p>
                    {item.price.toFixed(2)}
                    <font> &pound;</font>
                  </p>
                  <p>{`${item.promotion ? `${item.priceBefore.toFixed(2)} £` : ""}`}</p>
                </div>

                <div className="single-item-sizes">
                  {Object.keys(item.sizes).map((size, index) => (
                    <p
                      key={size}
                      className={`size 
                  ${
                    selectedSize && selectedSize === size
                      ? "active"
                      : item.sizes[size]
                      ? "available"
                      : "not-available"
                  }`}
                      onClick={
                        item.sizes[size] ? () => handleSelectedSize(size) : null
                      }
                    >
                      {size}
                    </p>
                  ))}
                </div>
                <div className="single-item-sizes-notification">
                  <p
                    className={`single-item-sizes-notavailable ${
                      Object.keys(item.sizes).find(
                        (size) => item.sizes[size] === true
                      )
                        ? ""
                        : "active"
                    }`}
                  >
                    No size available
                  </p>
                  <p
                    className={`single-item-sizes-notselected ${
                      displayErrorSizeNotSelected ? "active" : ""
                    }`}
                  >
                    Choose size to continue
                  </p>
                </div>

                <div
                  className={`single-item-addtocart ${
                    selectedSize === null ? "" : "active"
                  }`}
                >
                  <div>
                    <button onClick={() => handleDisplayErrorSizeNotSelected()}>
                      ADD TO CART
                    </button>
                    <button onClick={() => handleAddToCartButton()}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div className="display-single-item-description-container">
                <div className="display-single-item-description">
                  <h1>Description</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* display information that the item has been added to the cart  */}
        <div
          className={`item-added-to-cart-container ${
            itemAdded ? "active" : ""
          }`}
          onClick={() => setItemAdded(false)}
        >
          <div className="item-added-to-cart-content" onClick={event => event.stopPropagation()}>
            <div>
              <div className="item-added-to-cart-content-1">
                <h1>Item has been added to the cart</h1>
                <div
                  className="exit-button"
                  onClick={() => setItemAdded(false)}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="item-added-to-cart-content-2">
                <div className="item-added-to-cart-content-2-image">
                <img src={item.images[0]} alt=""></img>
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Size: {selectedSize}</p>
                  <h3>
                    {item.price.toFixed(2)} <font> &pound;</font>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item-added-to-cart-content-3">
              <Link to="../ShoppingCart">Order</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DisplaySingleItem;
