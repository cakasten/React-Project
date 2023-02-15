import { Card } from "../UI/Card";
import classes from "./Showcase.module.css";

const Showcase = (props) => {
  return (
    <Card className={classes.content}>
      <Card className={classes.mainArticle}>
        <h3>{props.content.title}</h3>
        <p>{props.content.body}</p>
      </Card>
    </Card>
  );
};
export default Showcase;
