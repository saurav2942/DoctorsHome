import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <>
      <div className="m-0 p-0 box-border">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
