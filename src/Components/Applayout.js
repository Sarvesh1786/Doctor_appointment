import React from "react";
import { Outlet } from "react-router";
import Menumain from "./Menumain";
import Footer from "./Footer";


const Applayout = () => {
  return (
    <>
      <Menumain />

      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Applayout;
