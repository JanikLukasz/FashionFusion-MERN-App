import React, { createContext, useState, useReducer } from "react";

// create context
export const AppContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD-TO-CART":
      const [itemId, itemImage, itemName, itemSize, itemPrice, itemQuantity] =
        action.payload.item;

      const itemIsInCart = cart.some(
        (item) => item.id === itemId && item.size === itemSize
      );

      if (itemIsInCart) {
        return cart.map((item) =>
          item.id === itemId && item.size === itemSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...cart,
          {
            id: itemId,
            image: itemImage,
            name: itemName,
            size: itemSize,
            price: itemPrice,
            quantity: 1,
          },
        ];
      }

    case "REMOVE-FROM-CART":
      const [
        itemIdCopy,
        itemImageCopy,
        itemNameCopy,
        itemSizeCopy,
        itemPriceCopy,
        itemQuantityCopy,
      ] = action.payload.item;

      return cart
        .map((item) => {
          if (item.id === itemIdCopy && item.size === itemSizeCopy) {
            return itemQuantityCopy > 1
              ? { ...item, quantity: itemQuantityCopy - 1 }
              : null;
          }
          return item;
        })
        .filter(Boolean);

    case "CLEAR-CART":
      return [];

    default:
      return cart;
  }
}

// provider component
export const AppContextProvider = ({ children }) => {
  // cart state
  const [cart, dispatch] = useReducer(cartReducer, []);
  // menubar state
  const [menubarIsActive, setMenubarIsActive] = useState(false);
  // gender state
  const [isCurrentGenderWomen, setCurrentGender] = useState(true);
  // selected item
  const [selectedItem, setSelectedItem] = useState();
  // mini cart active
  const [miniCartActive, setMiniCartActive] = useState(false);

  const addToCart = (item) => {
    dispatch({ type: "ADD-TO-CART", payload: { item } });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE-FROM-CART", payload: { item } });
  };

  const clearCart = (item) => {
    dispatch({ type: "CLEAR-CART", payload: { item } });
  };

  // function to update the  menubar state
  const handleMenubarClick = () => {
    setMenubarIsActive(!menubarIsActive);
  };

  // function to handle gender click
  const handleGenderClick = () => {
    setCurrentGender(!isCurrentGenderWomen);
  };

  // function to handle selected item
  const handleSelectedItemClick = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  // function to handle selected item
  const handleMiniCartActive = () => { 
    setMiniCartActive(!miniCartActive);
  };

  // value object containing all states
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    menubarIsActive,
    handleMenubarClick,
    isCurrentGenderWomen,
    handleGenderClick,
    selectedItem,
    handleSelectedItemClick,
    miniCartActive,
    handleMiniCartActive,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
