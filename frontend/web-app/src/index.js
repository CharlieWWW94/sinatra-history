import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExploreView from "./views/Explore";
import FactView from "./views/Fact";
import SearchView from "./views/Search";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App view={0}></App>}></Route>
      <Route path="/explore" element={<App view={1}></App>}></Route>
      <Route path="/search" element={<App view={2}></App>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
