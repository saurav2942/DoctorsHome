import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderShimmer from "./HeaderShimmer";
import FooterShimmer from "./FooterShimmer.js";
import MainShimmere from "./MainShimmere.js";
const Header = lazy(() => import("./Header.js"));
const Footer = lazy(() => import("./Footer.js"));



const App = () => {
  return (
    <>
      <div className="m-0 p-0 box-border z-0">
        <Suspense fallback={<HeaderShimmer />}>
          <Header />
        </Suspense>
        <Suspense fallback={<MainShimmere />}>
          <Outlet />
        </Suspense>
        <Suspense fallback={<FooterShimmer />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
