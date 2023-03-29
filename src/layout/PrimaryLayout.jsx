// qst comp. funge da layout per tutta la pagina. dentro ci metti i componenti che vuoi visualizzare in tutte le pagine e ti importi outlet in modo che tutte le pagine siano figlie di PrimaryLayout

import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PrimaryLayout = () => {
  return (
    <div className={styles.PrimaryLayout}>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PrimaryLayout;
