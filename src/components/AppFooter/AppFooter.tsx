import styles from "./AppFooter.module.scss";

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <span className={styles["footer__inner-text"]}>APP FOOTER HERE</span>
        </div>
      </div>
    </footer>
  );
}
