import styles from "../../scss/pages/Activities.module.scss";
import CardList from "../../components/cardList";
import activitiesList from "../../../src/mock/activities";

export default function Activities() {
  // const [itemsList, setItemsList] = useState([]);

  // useEffect(() => {
  //   fetch("https://failteireland.azure-api.net/opendata-api/v1/activities")
  //     .then((res) => res.json())
  //     .then((data) => setItemsList(data.results));
  // });

  return (
    <div className={styles.Activities}>
      <CardList data={activitiesList} />
    </div>
  );
}
