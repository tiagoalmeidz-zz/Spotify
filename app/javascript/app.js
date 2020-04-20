import "app.scss";
import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/common/menu";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
