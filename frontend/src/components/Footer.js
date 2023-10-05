import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const json = await response.json();

      if (response.ok) {
        setCategories(json);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-content-1">
        <div className="footer-logo-1">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <h1>Fashion Fusion</h1>
          </Link>
        </div>
        <div className="footer-content-1-icons">
          <div>
            <img src={icon1} alt=""></img>
          </div>
          <div>
            <img src={icon2} alt=""></img>
          </div>
          <div>
            <img src={icon3} alt=""></img>
          </div>
        </div>
      </div>
      <div className="footer-content-2-wrap">
        <div className="footer-content-2">
          <div className="footer-content-2-customersuppoer">
            <h3>customer support</h3>
            <div>
              <p>Order Tracking</p>
              <p>Returns and Exchanges</p>
              <p>Shipping Information</p>
              <p>Payment Options</p>
              <p>Terms and Conditions</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="footer-content-2-categories">
            <div className="footer-categories-title">
              <h3>Categories</h3>
            </div>
            <div className="footer-categories">
              {categories &&
                categories.map((category) => (
                  <Link to={`${category.name}`} key={category._id}>
                    <p>{category.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="footer-content-3">
          <p>Fashion Fusion Webshop</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
