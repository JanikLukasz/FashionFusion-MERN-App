import { useMiniCartContext } from "../contextHooks/UseMiniCartContext";
import { useCart } from "../contextHooks/UseCartContext";
import { Link } from "react-router-dom";

const MiniCart = () => {
  const { miniCartActive, handleMiniCartActive } = useMiniCartContext();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const calculateTotalCartAmount = () => {
    return cart.reduce((total, item) => {
      const subtotal = item.quantity * item.price;
      return total + subtotal;
    }, 0)
  }

  return (
    <div
      className={`mini-cart-container ${miniCartActive ? "active" : ""}`}
      onClick={handleMiniCartActive}
    >
      <div
        className="mini-cart-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mini-cart-content-1">
          <h1>Cart ({cart.length})</h1>
          <h3 onClick={() => clearCart()}>Clear Cart</h3>
        </div>

        <div className="mini-cart-content-2">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index}>
                <div className="mini-cart-content-2-imge">
                  <img src={item.image} alt="" />
                </div>
                <div className="mini-cart-content-2-description">
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>
                    {item.quantity} x {item.price.toFixed(2)}
                    <font> &pound;</font>
                  </p>
                </div>
                <div className="mini-cart-content-2-remove">
                  <p onClick={() => addToCart([item.id, item.image, item.name, item.size, item.price, item.quantity ])}>+</p>
                  <span className="material-symbols-outlined" onClick={() => removeFromCart([item.id, item.image, item.name, item.size, item.price, 1 ])}>delete</span>
                  <p onClick={() => removeFromCart([item.id, item.image, item.name, item.size, item.price, item.quantity ])}>-</p>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <div>
                <span className="material-symbols-outlined">shopping_cart</span>
              </div>
              <h3>Your Cart is empty</h3>
            </div>
          )}
        </div>

        <div className="mini-cart-content-3">
          <p>Total amount: <span>{calculateTotalCartAmount().toFixed(2)} <font> &pound;</font></span></p>
          <Link to="../ShoppingCart" className={`mini-cart-order ${cart.length < 1 ? "" : "active"}`} 
          onClick={handleMiniCartActive}>Order</Link>
          <Link to="../" className="mini-cart-continueshopping" onClick={handleMiniCartActive}>Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
