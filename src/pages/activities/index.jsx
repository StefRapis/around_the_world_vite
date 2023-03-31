import styles from "../../scss/pages/Activities.module.scss";
import CardList from "../../components/cardList";
import activitiesList from "../../../src/mock/activities";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Activities() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get("text");

  // const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    console.log(
      activitiesList.filter((continent) => continent.city.name === location)
    );
  });

  return (
    <div className={styles.Activities}>
      {
        searchParams.get("text") ? (
          <CardList
            data={activitiesList.filter(
              (continent) =>
                continent.city.name.toLowerCase() === location.toLowerCase()
            )}
          />
        ) : (
          <CardList data={activitiesList} />
        )
        // <p className={styles.location}>
        //   Ecco le attivitá per <span>{`${location}`}</span>:
        // </p>
      }
    </div>
  );
}
