import DisplayItems from "../components/DisplayItems";
import DisplayPath from "../components/DisplayPath"

const ItemsByCategory = () => {

  return (
    <div className="display-items-container">
      <DisplayPath />
      <DisplayItems />
    </div>
  );
};

export default ItemsByCategory;
