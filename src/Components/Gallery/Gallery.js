import classes from "./Gallery.module.css";
import { useState, useEffect, Fragment } from "react";
import fetchData from "../../Library/fetchData";
import { Card } from "../UI/Card";
import Showcase from "../Showcase/Showcase";

const Gallery = () => {
  const [mainPost, setMainPost] = useState({ title: "Welcome", body: "Click a card" });
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    fetchData(setPostArray);
  }, []);

  const clickHandler = ({ id }) => {
    const post = postArray.find((post) => post.id === id);
    setMainPost(post);
  };
  return (
    <Fragment>
      <Showcase className={classes.article} content={mainPost} />
      <div className={classes.gallery}>
        {postArray === null
          ? "no data recieved"
          : postArray.map(({ id, title, body }) => {
              return (
                <Card
                  className={classes.article}
                  clickHandler={() => clickHandler({ id })}
                  key={id}
                >
                  <h3>{title}</h3>
                  <p>{body}</p>
                </Card>
              );
            })}
      </div>
    </Fragment>
  );
};

export default Gallery;
