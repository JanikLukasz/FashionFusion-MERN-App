import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useFetchSingleItem = () => {
  const [item, setItem] = useState(null);
  const location = useLocation();
  const id = location.state || {};

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        const response = await fetch(`/api/items/${id}`);
        const json = await response.json();

        if (response.ok) {
          setItem(json);
        }
      } 
    };
    fetchItem();
  }, []);
  
  return { item };
};

export default useFetchSingleItem;
