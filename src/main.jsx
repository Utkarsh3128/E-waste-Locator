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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recycle",
    element: <Recycle />,
  },
  {
    path: "/reward",
    element: <Reward />,
  },
  {
    path: "/recycle/map",
    element: <Map />,
  },
  {
    path: "/pune",
    errorElement: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
