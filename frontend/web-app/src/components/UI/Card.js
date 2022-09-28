import "./Card.css";
const Card = (props) => {
  return <div className={"Card " + props.addClassName}>{props.children}</div>;
};

export default Card
