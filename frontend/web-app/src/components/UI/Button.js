import { useEffect } from "react";
//removing form from button
const Button = (props) => {
  const prevDef = (event) => {
    event.preventDefault();
    props.clickFunc()
  };

  return (
      <button onClick= {prevDef}>
        {props.message}
      </button>
  );
};

export default Button;
