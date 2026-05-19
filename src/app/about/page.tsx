import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.page}>
      <section>
        <div className="container">
          <div className={styles.page__inner}>ABOUT PAGE HERE</div>
        </div>
      </section>
    </div>
  );
}
