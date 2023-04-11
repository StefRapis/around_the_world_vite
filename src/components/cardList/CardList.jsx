import styles from "./index.module.scss";
import Card from "../card";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {/* <h2>Dai un'occhiata alle destinazioni piú popolari:</h2> */}
      {/* {!!data && <p>La cittá cercata non é disponibile</p>} */}

      {data.map((item) => (
        <Card data={item} key={item.uuid} />
      ))}
    </div>
  );
};

export default CardList;
