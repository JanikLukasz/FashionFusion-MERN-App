import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Home from "../pages/Home";
import ItemsByCategory from "../pages/ItemsByCategory";
import ItemsInPromotion from "../pages/ItemsInPromotion";
import Footer from "../components/Footer";
import MiniCart from "../components/MiniCart";
import DisplaySingleItem from "../pages/DisplaySingleItem";
import ShoppingCart from "../pages/ShoppingCart";
import { Outlet } from "react-router-dom";

const HomeLayout = () => (
  <>
    <Navbar />
    <Home />
    <Categories />
    <MiniCart />
    <Footer />
    <Outlet />
  </>
);

const ItemLayout = () => (
  <>
    <Navbar />
    <Categories />
    <MiniCart />
    <DisplaySingleItem />
    <Footer />
    <Outlet />
  </>
);

const ItemsByCategoryLayout = () => (
  <>
    <Navbar />
    <Categories />
    <MiniCart />
    <ItemsByCategory />
    <Footer />
    <Outlet />
  </>
);

const ItemsPromotionsLayout = () => (
  <>
    <Navbar />
    <Categories />
    <MiniCart />
    <ItemsInPromotion />
    <Footer />
    <Outlet />
  </>
);

const CartLayout = () => (
  <>
    <ShoppingCart />
    <Footer />
    <Outlet />
  </>
);

export  {
  HomeLayout,
  ItemLayout,
  ItemsByCategoryLayout,
  ItemsPromotionsLayout,
  CartLayout
};
