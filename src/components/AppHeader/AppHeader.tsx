import styles from "./AppHeader.module.scss";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>APP HEADER HERE</div>
      </div>
    </header>
  );
}
