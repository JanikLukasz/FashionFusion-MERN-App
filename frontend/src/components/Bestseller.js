import Image5 from "../assets/image-5.jpg";
import Image6 from "../assets/image-6.jpg";
import Image7 from "../assets/image-7.jpg";
import { Link } from "react-router-dom";

const Bestseller = () => {
 
  return (
    <div className="bestseller-container">
      <h1 className="bestseller-title">BESTSELLER FASHION FUSION</h1>
      <div className="bestseller-content">
        <div className="bestseller-images">
          <div>
            <img src={Image5} alt=""></img>
          </div>
          <div>
            <img src={Image7} alt=""></img>
          </div>
          <div>
            <img src={Image6} alt=""></img>
          </div>
        </div>
        <Link className="bestseller-button"   to={`../Jckets/${("Jacket Deni Trucker").replace(/ /g, "-")}`}
                state={'651d3941ef0da7e0b0df4a5a'}>
          <p className="bestseller-items-name">Jacket Deni Trucker</p>
          <span className="bestseller-price">180.69 <font>&pound;</font></span>
          <span className="bestseller-price-before">260.00 <font>&pound;</font></span>
        </Link>
      </div>
    </div>
  );
};

export default Bestseller;
