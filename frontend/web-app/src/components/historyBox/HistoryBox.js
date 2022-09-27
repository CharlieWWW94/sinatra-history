import { useState, useEffect } from "react";
import Card from "../UI/Card";
import HistoryBoxHeading from "./HistoryBoxHeading";
import Button from "../UI/Button";

const HistoryBox = (props) => {
  const [historicalEvent, setHistoricalEvent] = useState("");
  const [count, setCount] = useState(0)


  const addCount = () => {
    setCount(() => {
      return count + 1;
    })
  }

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:4567/");
    const data = await response.json();
    console.log(data);
    setHistoricalEvent(data);
  }

  useEffect(() => { 
    getData();
  }, [count]);

  return (
    <Card>
      <HistoryBoxHeading />
      
      {historicalEvent && <div><p>{historicalEvent.date}</p><p>{historicalEvent.fact}</p></div>}
      <Button clickFunc = {addCount} message="Click here!" />
    </Card>
  );
};

export default HistoryBox;
