import React from "react";
import Button from "../Button";
import styles from "../Main/Main.module.scss";

const Main = () => {
  return (
    <React.Fragment>
      {/* <a id="Intro" /> */}
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.box}>
            <div>
              <h1 className={styles.mainContainer__heading1}>Hrak Torousian</h1>
            </div>
          </div>
          <div className={styles.box2}>
            <div>
              <h2 className={styles.mainContainer__heading2}>
                Full Stack Developer
              </h2>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              theme="blue"
              icon="Projects"
              className={styles.projectButton}
            >
              Projects
            </Button>
            <Button
              theme="grey"
              icon="Download"
              className={styles.downloadButton}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.secondaryContainer} />
    </React.Fragment>
  );
};
export default Main;
