import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout";

// import Testproject from "./Testproject";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouterLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
