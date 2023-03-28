import styles from "../styles/pages/About.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className={styles.About}>
      <Navbar />
      About
      <Footer />
    </div>
  );
}
