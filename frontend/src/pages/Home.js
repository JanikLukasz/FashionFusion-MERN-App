import { useEffect, useState } from "react";
import PromotionSlideOne from "../components/PromotionSlideOne";
import PromotionSlideTwo from "../components/PromotionSlideTwo";
import Bestseller from "../components/Bestseller";
import { Link } from "react-router-dom";
import DisplayItems from "../components/DisplayItems";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [PromotionSlideOne, PromotionSlideTwo];

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const getPromotionSliderContainer = () => ({
    width: `${components.length * 100}%`,
    transform: `translateX(${-(currentIndex * (100 / components.length))}%)`,
    transition: "transform ease-out 0.3s",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideLeft();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex, components.length]);

  return (
    <div className="home-container">
      {/* ----------promotions --------------*/}
      <div className="promotion-slider-container">
        <div className="promotion-slider" style={getPromotionSliderContainer()}>
          {components.map((Component, index) => (
            <Link
              to="Promotions"
              key={index}
              className={`current-component ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <Component />
            </Link>
          ))}
        </div>
        <div className="indicators-container">
          <span
            className={`indicator ${
              0 === currentIndex ? "active" : "inactive"
            }`}
          ></span>
          <span
            className={`indicator ${
              1 === currentIndex ? "active" : "inactive"
            }`}
          ></span>
        </div>
        <div className="promotion-slider-buttons">
          <button onClick={handleSlideLeft}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button onClick={handleSlideRight}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>

      {/* ---------- bestseller component--------------*/}
      <div className="bestseller-component-container">
        <Bestseller />
      </div>

      {/* ---------- items component--------------*/}
      <div className="home-container-2">
        <h1 className="home-title">FASHION FUSION PRODUCTS</h1>
        <DisplayItems />
      </div>
      
    </div>
  );
};

export default Home;
