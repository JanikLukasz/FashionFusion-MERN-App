import { AppContext } from "../context/AppContext";
import { useContext } from "react";

// Custom hook for accessing the menu bar and its functions
export const useMenubar = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useMenubar must be used within a AppContextProvider");
  }
  const { menubarIsActive, handleMenubarClick } = context;

  document.body.classList.toggle("no-scroll", menubarIsActive);

  return { menubarIsActive, handleMenubarClick };
};

