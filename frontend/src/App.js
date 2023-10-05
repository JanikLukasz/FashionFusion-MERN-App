import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomeLayout,
  ItemLayout,
  ItemsByCategoryLayout,
  ItemsPromotionsLayout,
  CartLayout,
} from "./routeLayouts/CustomRouteLayouts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<HomeLayout />} />
            <Route
              exact
              path=":categoryName"
              element={<ItemsByCategoryLayout />}
            />
            <Route
              exact
              path=":categoryName/:itemsName"
              element={<ItemLayout />}
            />
            <Route exact path="/ShoppingCart" element={<CartLayout />} />
            <Route exact path="/Promotions" element={<ItemsPromotionsLayout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
