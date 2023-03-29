import styles from "../activities/id.module.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Activity() {
  const { id } = useParams();
  const [singleActivity, setSingleActivity] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleActivity(data));
  }, []);

  return (
    <div className={styles.Activity}>
      <div className={styles.image}>
        <img src={singleActivity.image} alt={singleActivity.title} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{singleActivity.title}</h2>
        <p className={styles.description}>{singleActivity.description}</p>
        <p className={styles.price}>{singleActivity.price} Euro</p>
      </div>
    </div>
  );
}
