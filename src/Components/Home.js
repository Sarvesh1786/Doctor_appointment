import React, { Profiler } from "react";
import Aboutus from "./Aboutus";
import Slideshow from "./Slideshow";
import Overserviecs from "./Overserviecs";
// import Profile from "./Profile";
import "../App.css"

const Home = () => {
  return (
    <>
    <div className="home">

      <Slideshow />

      <Aboutus/>
    </div>
      <Overserviecs/>
      {/* <Profile/> */}
    </>
  );
};

export default Home;
