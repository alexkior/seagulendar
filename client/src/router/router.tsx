import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },

]);

export default router
