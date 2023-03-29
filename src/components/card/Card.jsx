import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const openItem = () => {
    navigate(`${data.id}`);
  };

  return (
    <div className={styles.Card} onClick={openItem}>
      <div className={styles.image}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>
          {data.title.split(" ").splice(0, 3).join(" ")}
        </h2>
        <p className={styles.description}>
          {data.description.substring(0, 50)}
        </p>
        <p className={styles.price}>{data.price} Euro</p>
      </div>
    </div>
  );
};

export default Card;
