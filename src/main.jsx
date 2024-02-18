import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Recycle from "./Components/Recycle.jsx";
import Reward from "./Components/Reward.jsx";
import Map from "./Components/Map.jsx";

const router = createBrowserRouter([
  {
    path: "/E-waste-Locator/",
    element: <App />,
  },
  {
    path: "E-waste-Locator/login",
    element: <Login />,
  },
  {
    path: "/E-waste-Locator/recycle",
    element: <Recycle />,
  },
  {
    path: "E-waste-Locator/reward",
    element: <Reward />,
  },
  {
    path: "/E-waste-Locator/recycle/map",
    element: <Map />,
  },
  {
    path: "/E-waste-Locator/pune",
    errorElement: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
