import { useState, useEffect } from "react";
import Card from "../UI/Card";
import HistoryBoxHeading from "./HistoryBoxHeading";
import Button from "../UI/Button";
import boxStyles from "./hBStyling/HistoryBox.module.css";
import boxContentStyles from "./hBStyling/boxContentStyles.module.css";

const HistoryBox = (props) => {

  // const [historicalEvent, setHistoricalEvent] = useState("");
  // const [count, setCount] = useState(0);

  // const addCount = () => {
  //   setCount(() => {
  //     return count + 1;
  //   });
  // };

  // const getData = async () => {
  //   const response = await fetch("http://127.0.0.1:4567/");
  //   const data = await response.json();
  //   console.log(data);
  //   setHistoricalEvent(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, [count]);

  console.log(props.test);

  return (
    <Card addClassName={boxStyles.historycard}>
      <HistoryBoxHeading />
      {props.fact && (
        <div className={boxContentStyles.content}>
          <div>
            <p className={boxContentStyles.date}>{props.fact.date}</p>
          </div>
          <p className={boxContentStyles.fact}>{props.fact.fact}</p>
        </div>
      )}
      <div>
        <Button clickFunc={props.onClick} message="New Fact" />
      </div>
    </Card>
  );
};

export default HistoryBox;
