import styles from "../Main/Main.module.scss";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const Main = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["main-container"]}>
          <h1 className={styles["main-container__heading1"]}>Hi, I'm Hrak </h1>
          <h2 className={styles["main-container__heading2"]}>
            <div className={styles["slidingVertical"]}>
              <span>Based in LA</span>
              <span>Self-Taught</span>
              <span>Experienced</span>
              <span>Creative</span>
            </div>
          </h2>
          <h2 className={styles["main-container__heading2"]}>
            Full Stack Developer
          </h2>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};
export default Main;
