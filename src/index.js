import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';
import App from "./components/App";



ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    {console.log("Process enviroment", process.env)}
    <App />
  </Router>,
  document.getElementById("root")
);
