import React from "react";
import { Route, Routes } from "react-router";
import Applayout from "./Applayout";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Profile from "./Profile";
import Contactus from "./Contactus";
import Blog from "./Blog";
import Xraysservies1 from "./Allservies/Xraysservies1";
const RouterLayout = () => {
  return (
    <>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/overviwe" element={<Aboutus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/xray" element={<Xraysservies1 />} />


          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterLayout;
