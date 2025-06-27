import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>My React and TypeScript App!! {""} 
{new Date().toLocaleDateString()}</h1>;
const unused = "something";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
