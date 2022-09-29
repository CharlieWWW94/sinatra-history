import { useEffect } from "react";
import buttonStyles from "./Button.module.css"
const Button = (props) => {
  console.log(props.clickFunc)
  const prevDef = (event) => {
    console.log(props.test)
    event.preventDefault();
    props.clickFunc()
  };

  return (
      <button className={buttonStyles.button} onClick= {prevDef}>
        {props.message}
      </button>
  );
};

export default Button;
