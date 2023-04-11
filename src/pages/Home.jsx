import styles from "../scss/pages/Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const setLocation = (event) => {
    setInput(() => event.target.value);
  };
  // qui uso UseState con il suo valore, insieme a useNavigate per portarmi il valore sulla pagina delle attivitá
  const onHandleClick = () => {
    navigate(`/activities?text=${input}`);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>
            <span>Dove</span> ti porterá il tuo <span>istinto</span> questa
            volta?
          </h1>
        </div>
        <div className={styles.form}>
          {/* <label htmlFor="location">Dove vuoi andare?</label> */}
          <input
            type="text"
            name="location"
            placeholder="Prova Londra, o Miami! "
            value={input}
            onChange={setLocation}
          />
          <button onClick={onHandleClick}>GO!</button>
        </div>
        <div className={styles.imagediv}>
          <img src="./4229858.jpg" alt="explorer" />
        </div>
      </div>
    </div>
  );
}
