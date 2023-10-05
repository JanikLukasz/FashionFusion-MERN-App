import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const DisplayItems = () => {
  const { filteredItems } = useFetch();

  return (
    <div className="items-component-container">
      <div className="items">
        {filteredItems &&
          filteredItems.map((item) => (
            <div className="items-container" key={item._id}>
              <Link
                to={`../${item.categoryName}/${item.name.replace(/ /g, "-")}`}
                state={item._id}
                className="items-link"
              >
                <div className="items-image">
                  <span
                    className={`items-promotion ${
                      item.promotion ? "available" : "not-available"
                    }`}
                  >
                    PROMOTION
                  </span>
                  <img src={item.images[0]} alt="" />
                </div>
                <p className="items-name">{item.name}</p>
              </Link>
              <div className="items-price-container">
                <p className="items-price">
                  {item.price.toFixed(2)} <font>&pound;</font>
                </p>
                <p
                  className={`items-price-before ${
                    item.promotion ? "available" : "not-available"
                  }`}
                >
                  {item.promotion ? item.priceBefore.toFixed(2) : ""}{" "}
                  <font>&pound;</font>
                </p>
              </div>
              <div className="sizes-container">
                {Object.keys(item.sizes).map((size) => (
                  <p
                    key={size}
                    className={`size ${
                      item.sizes[size] ? "available" : "not-available"
                    }`}
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayItems;
