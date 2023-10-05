import Image3 from "../assets/image-3.jpg";
import Image4 from "../assets/image-4.jpg";

const PromotionSlideTwo = () => {
  return (
    <div className="promotion-slide-two">
      <div className="promotion-images-container-2">
        <img src={Image4} alt=""></img>
        <img src={Image3} alt=""></img>
      </div>
      <div className="promotion-slide-two-content">
        <h1>Tshirts</h1>
        <p>and</p>
        <h1>Hoodies</h1>
        <button>CHECK OUR PROMOTIONS</button>
      </div>
    </div>
  );
};

export default PromotionSlideTwo;
