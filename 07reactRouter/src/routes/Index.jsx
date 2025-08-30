import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PublicRoutes } from "./public-route/PublicRoutes.jsx";
import App from "../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {PublicRoutes}
    </Route>
  )
);

export default router;
