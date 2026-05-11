import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <section>
        <div className="container">
          <div className={styles.page__inner}>HOME PAGE HERE</div>
        </div>
      </section>
    </div>
  );
}
