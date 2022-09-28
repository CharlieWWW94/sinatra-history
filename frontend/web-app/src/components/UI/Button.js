import { useEffect } from "react";
import buttonStyles from "./Button.module.css"
const Button = (props) => {
  const prevDef = (event) => {
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
