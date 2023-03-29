import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="city/:id">Cities</Link>
        </li>
        <li>
          <Link to="activities">Activities</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
