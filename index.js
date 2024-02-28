import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import Home from "./src/components/Home";
import Services from "./src/components/Services";
import About from "./src/components/About";

const App = lazy(() => import("./src/components/App"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <App/>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Services/>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
