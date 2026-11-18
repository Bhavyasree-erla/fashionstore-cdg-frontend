
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import EditDestination from "../pages/EditDestinations";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderHistory from "../pages/OrderHistory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/destinations" element={<Destinations />} />

      <Route
        path="/destinations/:id"
        element={<DestinationDetails />}
      />

      <Route
        path="/edit-destination/:id"
        element={<EditDestination />}
      />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/orders" element={<OrderHistory />} />
    </Routes>
  );
}

export default AppRoutes;
