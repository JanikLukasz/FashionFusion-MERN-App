import FFLogo from "../assets/FF_logo.png";
import DHLlogo from "../assets/dhl-icon.png";
import Inpostlogo from "../assets/inpost-icon.png";
import FedexLogo from "../assets/fedex-icon.png";
import PayUlogo from "../assets/payu-icon.png";
import PayPalogo from "../assets/paypal-icon.png";
import { useCart } from "../contextHooks/UseCartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function ShoppingCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [radioButtonDelivery, setRadioButtonDelivery] = useState();
  document.body.classList.toggle("no-scrolly", false);
  const [couponCode, setCouponCode] = useState("");
  const [deliveryCosts, setdeliveryCosts] = useState(0);

  const handleChange = (e) => {
    setCouponCode(e.target.value);
  };

  const calculateTotalCartAmount = () => {
    return cart.reduce((total, item) => {
      const subtotal = item.quantity * item.price;
      return total + subtotal;
    }, 0);
  };

  const inPostDeliveryCosts = 4.4;
  const DHLDeliveryCosts = 5.2;
  const FeedExDeliveryCosts = 6.3;

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-content-1">
        <Link to="/">
          <img src={FFLogo} alt=""></img>
          <h1>Fashion Fusion</h1>
        </Link>
      </div>

      <div className="shopping-cart-content-2-container">
        <div className="shopping-cart-content-2">
          <div>
            <p>1</p>
            <p>Cart</p>
          </div>
          <span>.....</span>
          <div>
            <p>2</p>
            <p>Summary</p>
          </div>
          <span>.....</span>
          <div>
            <p>3</p>
            <p>Payment</p>
          </div>
        </div>
      </div>

      <div className="shopping-cart-content-3">
        <div className="shopping-cart-cart">
          <div className="shopping-cart-cart-title">
            <h1>
              Cart (<span>{cart.length}</span>)
            </h1>
            <p className="shopping-cart-clear-cart" onClick={clearCart}>
              Clear Cart
            </p>
          </div>
          <div className="shopping-cart-cart-displayitems">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index}>
                  <div className="shopping-cart-cart-displayitems-image-and-description">
                    <div className="shopping-cart-cart-displayitems-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="shopping-cart-cart-displayitems-description">
                      <p>{item.name}</p>
                      <p>Size: {item.size}</p>
                      <p>
                        {item.quantity} x {item.price.toFixed(2)}
                        <font> &pound;</font>
                      </p>
                    </div>
                  </div>
                  <div className="shopping-cart-cart-displayitems-remove">
                    <p
                      onClick={() =>
                        addToCart([
                          item.id,
                          item.image,
                          item.name,
                          item.size,
                          item.price,
                          item.quantity,
                        ])
                      }
                    >
                      +
                    </p>
                    <span
                      className="material-symbols-outlined"
                      onClick={() =>
                        removeFromCart([
                          item.id,
                          item.image,
                          item.name,
                          item.size,
                          item.price,
                          1,
                        ])
                      }
                    >
                      delete
                    </span>
                    <p
                      onClick={() =>
                        removeFromCart([
                          item.id,
                          item.image,
                          item.name,
                          item.size,
                          item.price,
                          item.quantity,
                        ])
                      }
                    >
                      -
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <div>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </div>
                <h3>Your Cart is empty</h3>
              </div>
            )}
          </div>

          <div className="shopping-cart-delivery">
            <h1>Choose delivery method</h1>
            <div className="shopping-cart-deliveryandpayment-methods">
              <label onClick={() => setdeliveryCosts(DHLDeliveryCosts)}>
                <div>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    className="input-radio"
                    onClick={() => setRadioButtonDelivery(1)}
                  />
                  <div className="shopping-cart-delivery-image">
                    <img src={DHLlogo} alt=""></img>
                  </div>
                  <p>
                    {inPostDeliveryCosts.toFixed(2)} <font> &pound;</font>
                  </p>
                  <p>DHL</p>
                </div>
                <button
                  className={`deliveryandpayment-methods-radio-button ${
                    radioButtonDelivery === 1 ? "active" : ""
                  }`}
                >
                  Choose Delivery Address
                </button>
              </label>
              <label onClick={() => setdeliveryCosts(inPostDeliveryCosts)}>
                <div>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    className="input"
                    onClick={() => setRadioButtonDelivery(2)}
                  />
                  <div className="shopping-cart-delivery-image">
                    <img src={Inpostlogo} alt=""></img>
                  </div>
                  <p>
                    {DHLDeliveryCosts.toFixed(2)} <font> &pound;</font>
                  </p>
                  <p>InPost</p>
                </div>
                <button
                  className={`deliveryandpayment-methods-radio-button ${
                    radioButtonDelivery === 2 ? "active" : ""
                  }`}
                >
                  Choose Delivery Address
                </button>
              </label>
              <label onClick={() => setdeliveryCosts(FeedExDeliveryCosts)}>
                <div>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    className="input"
                    onClick={() => setRadioButtonDelivery(3)}
                  />
                  <div className="shopping-cart-delivery-image">
                    <img src={FedexLogo} alt=""></img>
                  </div>
                  <p>
                    {FeedExDeliveryCosts.toFixed(2)} <font> &pound;</font>
                  </p>
                  <p>FeedEx</p>
                </div>
                <button
                  className={`deliveryandpayment-methods-radio-button ${
                    radioButtonDelivery === 3 ? "active" : ""
                  }`}
                >
                  Choose Delivery Address
                </button>
              </label>
            </div>
          </div>

          <div className="shopping-cart-paymentmethod">
            <h1>Choose payment method</h1>
            <div className="shopping-cart-deliveryandpayment-methods">
              <label>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="standard"
                    className="input-radio"
                  />
                  <div className="shopping-cart-delivery-image">
                    <img src={PayUlogo} alt=""></img>
                  </div>
                  <p>PayU</p>
                </div>
              </label>
              <label>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="standard"
                    className="input-radio"
                  />
                  <div className="shopping-cart-delivery-image">
                    <img src={PayPalogo} alt=""></img>
                  </div>
                  <p>PayPal</p>
                </div>
              </label>
            </div>

            <div className="shopping-cart-order-button">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="shopping-cart-summary">
          <div className="shopping-cart-summary-content">
            <h1>Summary</h1>
            <div>
              <p>Total amount: </p>
              <p>
                {calculateTotalCartAmount().toFixed(2)} <font> &pound;</font>
              </p>
            </div>
            <div>
              <input
                type="text"
                name="coupon"
                value={couponCode}
                className="input-coupon"
                onChange={handleChange}
                placeholder="CODE"
              />
              <button>Use your code</button>
            </div>
            <div>
              <p>Costs of delivery: </p>
              <p>
                {deliveryCosts.toFixed(2)} <font> &pound;</font>
              </p>
            </div>

            <div>
              <p>Payment total: </p>
              <p>
                {(calculateTotalCartAmount() + deliveryCosts).toFixed(2)}{" "}
                <font> &pound;</font>
              </p>
            </div>
            <div className="shopping-cart-summary-order-button">
              <button>Order</button>

              <Link to="../">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
