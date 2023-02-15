import { Fragment } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import classes from "./App.module.css";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <Fragment>
      <header>
        <Navbar className={classes.navbar} />
      </header>
      <main>
        <Gallery />
      </main>
    </Fragment>
  );
}

export default App;
