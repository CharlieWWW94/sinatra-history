import "./App.css";
import HistoryBox from "./components/historyBox/HistoryBox";
import Nav from "./components/navigation/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FactView from "./views/Fact.js";

//outline functions for state here
//Make all routes come here - decide what to display via logi. Information can then be pass from here.

const App = (props) => {
  console.log(props.children);
  return (
      <div className="App">
        {props.children}
      </div>
  );
}

export default App;
