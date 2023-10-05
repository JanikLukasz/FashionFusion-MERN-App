import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";

const PromotionSlideOne = () => {
  return (
    <div className="promotion-slide-one">
      <div className="promotion-images-container">
        <img src={Image1} alt=""></img>
        <img src={Image2} alt=""></img>
      </div>
      <div className="promotion-slide-one-content">
        <p>Promotion</p>
        <h1>Blue Jeans</h1>
        <h3>
          Dive into denim perfection!
          <br />
          Introducing our exclusive Blue Jeans collection.
        </h3>
        <div className="promotion-slide-one-content-price">
        <p>169,99<font>&pound;</font></p>
        <h1>120,99<font>&pound;</font></h1>
        </div>
      </div>
    </div>
  );
};

export default PromotionSlideOne;
