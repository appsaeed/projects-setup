//dependencies
import React from "react";
import ReactDOM from "react-dom/client";
//css
import "./assets/index.css";
//page or components
import Welcome from "./views/Welcome";

//main dom element id attributes
const maindomid: string = import.meta.env.VITE_MAINDOM || "%VITE_MAINDOM%";

//main element selector
const element = document.getElementById(maindomid) as HTMLElement;

//render frontend framework
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
