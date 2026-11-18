import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Destinations from "../pages/Destinations.jsx";
import DestinationDetails from "../pages/DestinationDetails.jsx";
import EditDestination from "../pages/EditDestination.jsx";

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
    </Routes>
  );
}

export default AppRoutes;