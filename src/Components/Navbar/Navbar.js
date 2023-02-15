import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h4>Clint Kasten</h4>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
