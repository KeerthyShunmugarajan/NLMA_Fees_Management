import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import TestView from "./views/TestView";

const root=ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
    <TestView/>
  </React.StrictMode>
);

//TO DO
//Redux Changes
//