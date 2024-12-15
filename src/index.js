import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Reserva from "./routes/Reserva/Reserva";

// Config Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reserva",
    element: <Reserva />,
  }
]);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
