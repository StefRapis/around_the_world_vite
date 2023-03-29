import styles from "../../scss/pages/Activities.module.scss";
import CardList from "../../components/cardList";

import { useState, useEffect } from "react";

export default function Activities() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItemsList(data));
  });

  return (
    <div className={styles.Activies}>
      <CardList data={itemsList} />
    </div>
  );
}
