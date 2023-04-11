import styles from "../scss/pages/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>La nostra storia</h2>
          <p>
            Lorem Ipsum è considerato il testo segnaposto standard sin dal
            sedicesimo secolo, quando un anonimo tipografo prese una cassetta di
            caratteri e li assemblò per preparare un testo campione. È
            sopravvissuto non solo a più di cinque secoli.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1573072738379-7c640e17ac4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt="explorers"
        />
      </div>
      <div className={styles.section2}>
        <img
          src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="explorers"
        />
        <div className={styles.text2}>
          <h2>La nostra storia</h2>
          <p>
            Lorem Ipsum è considerato il testo segnaposto standard sin dal
            sedicesimo secolo, quando un anonimo tipografo prese una cassetta di
            caratteri e li assemblò per preparare un testo campione. È
            sopravvissuto non solo a più di cinque secoli.
          </p>
        </div>
      </div>
    </div>
  );
}
