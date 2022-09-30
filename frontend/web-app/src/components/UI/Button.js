import { useEffect } from "react";
import buttonStyles from "./Button.module.css"
const Button = (props) => {
  
  const prevDef = (event) => {
    if (props.clickFunc) {props.clickFunc(event)};
  };

  return (
      <button type="submit" className={buttonStyles.button} onClick= {prevDef}>
        {props.message}
      </button>
  );
};

export default Button;
