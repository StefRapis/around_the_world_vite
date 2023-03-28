import styles from "../styles/pages/City.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function City() {
  return (
    <div className={styles.City}>
      <Navbar />
      pagina City
      <Footer />
    </div>
  );
}
