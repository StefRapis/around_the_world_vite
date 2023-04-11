import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const openItem = () => {
    navigate(`${data.uuid}`);
  };

  return (
    <div className={styles.Card} onClick={openItem}>
      <div className={styles.image}>
        <img src={data.cover_image_url} alt={data.city.name} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{data.city.name}</h2>
        <p>{data.city.time_zone}</p>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
