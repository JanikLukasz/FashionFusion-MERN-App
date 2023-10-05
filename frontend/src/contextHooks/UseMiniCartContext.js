import { AppContext } from "../context/AppContext";
import { useContext } from "react";

// Custom hook for accessing the menu bar and its functions
export const useMiniCartContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useMenubar must be used within a AppContextProvider");
  }
  const { miniCartActive, handleMiniCartActive } = context;
  document.body.classList.toggle("no-scrolly", miniCartActive);

  return { miniCartActive, handleMiniCartActive };
};
