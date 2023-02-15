import "./Card.css";

export const Card = (props) => {
  return <div onClick={props.clickHandler} className={ `card ${props.className}`}>{props.children}</div>;
};
