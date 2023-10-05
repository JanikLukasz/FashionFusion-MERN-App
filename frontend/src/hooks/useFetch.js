import { useState, useEffect } from 'react';
import { useCurrentGenderContext } from "../contextHooks/UseCurrentGenderContext";
import { useParams, useLocation } from 'react-router-dom';

const useFetch = () => {
    const [items, setItems] = useState(null);
    const { isCurrentGenderWomen } = useCurrentGenderContext();
    const { categoryName } = useParams();
    const location = useLocation();
   
    useEffect(() => {
      const fetchItems = async () => {
        const response = await fetch("/api/items");
        const json = await response.json();
  
        if (response.ok) {
          setItems(json);
        }
      };
      fetchItems();
    }, []);

    if (location.pathname === "/") {
      const filteredItems = items
      ? items.filter((item) => item.genderIsFemale === isCurrentGenderWomen)
      : [];
      return { items, filteredItems };
    } else if(location.pathname === `/${categoryName}`) {
      const filteredItems = items
      ? items.filter((item) => item.genderIsFemale === isCurrentGenderWomen && item.categoryName === categoryName)
      : [];
      return { items, filteredItems };
    } else if (location.pathname === "/Promotions"){
      const filteredItems = items
      ? items.filter((item) => item.genderIsFemale === isCurrentGenderWomen && item.promotion)
      : [];
      return { items, filteredItems };
    } else {
      return { items };
    }

}

export default useFetch;