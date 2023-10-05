import { AppContext } from "../context/AppContext";
import { useContext } from "react";

// Custom hook for accessing handleGenderClick functions
export const useCurrentGenderContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useMenubar must be used within a AppContextProvider");
  }
  const { isCurrentGenderWomen, handleGenderClick } = context;

  return { isCurrentGenderWomen, handleGenderClick };
};

