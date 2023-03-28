import styles from "../styles/pages/Home.module.scss";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
