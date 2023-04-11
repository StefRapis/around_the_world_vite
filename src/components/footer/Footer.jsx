import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h4>Around the World</h4>
      <p>Developer: Stefania Rapisarda</p>
      <p>Copyright - 2023</p>
      <p className={styles.attribution}>Immagini di Freepik</p>
    </div>
  );
};

export default Footer;
