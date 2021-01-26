import styles from "../Main/Main.module.scss";

const Main = () => {
  return (
    <>
      <a id="Intro" />
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.mainContainer__heading1}>Hi, I'm Hrak </h1>
          <h2 className={styles.mainContainer__heading2}>
            <div className={styles.slidingVertical}>
              <span>Based in LA</span>
              <span>Self-Taught</span>
              <span>Experienced</span>
              <span>Creative</span>
            </div>
          </h2>
          <h2 className={styles.mainContainer__heading2}>
            Full Stack Developer
          </h2>
        </div>
      </div>
    </>
  );
};
export default Main;
