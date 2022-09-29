import "./App.css";
import { useState, useEffect } from "react";
import HistoryBox from "./components/historyBox/HistoryBox";
import Nav from "./components/navigation/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FactView from "./views/Fact.js";
import ExploreView from "./views/Explore";
import SearchView from "./views/Search";

//outline functions for state here
//Make all routes come here - decide what to display via logic. Information can then be pass from here.

const App = (props) => {
  const [historicalEvent, setHistoricalEvent] = useState("");
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(() => {
      return count + 1;
    });
  };

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:4567/");
    const data = await response.json();
    console.log(data);
    setHistoricalEvent(data);
  };

  useEffect(() => {
    getData();
  }, [count]);

  const views = {
    0: <FactView passClick={addCount} passFact={historicalEvent} />,
    1: <ExploreView wikiFact={historicalEvent}/>,
    2: <SearchView />,
  };

  return (
    <div className="App">
      {views[props.view]}
    </div>
  );
};

export default App;
