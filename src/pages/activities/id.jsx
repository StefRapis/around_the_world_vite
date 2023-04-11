import styles from "../activities/id.module.scss";
import activitiesList from "../../mock/activities";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Activity() {
  const { id } = useParams();
  const [singleActivity, setSingleActivity] = useState({});

  useEffect(() => {
    setSingleActivity(activitiesList.find((activity) => activity.uuid === id));
  }, []);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setSingleActivity(data));
  // }, []);

  return (
    <div className={styles.Activity}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img
            src={singleActivity.cover_image_url}
            alt={singleActivity.title}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{singleActivity.title}</h2>

          <p>Reviews: {singleActivity.reviews_number}</p>
          <p className={styles.description}>{singleActivity.description}</p>
        </div>
      </div>
      <h3 className={styles.panoramica}>Panoramica</h3>
      <p className={styles.about}>{singleActivity.about}</p>
      <h3 className={styles.panoramica}>Meeting Point</h3>
      <p className={styles.meeting_point}>{singleActivity.meeting_point}</p>
    </div>
  );
}
