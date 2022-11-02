import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <h1>ROOT</h1> </>,
  },
  {
    path: "/auth",
    element: <> <h1>AUTH</h1> </>,
  },
]);

export default router
