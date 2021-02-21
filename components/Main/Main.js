import React from "react";

import Button from "../Button";
import styles from "../Main/Main.module.scss";

const Main = () => {
  return (
    <React.Fragment>
      {/* <a id="Intro" /> */}
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.mainContainer__heading1}>Hrak Torousian </h1>
          <h2 className={styles.mainContainer__heading2}>
            Full Stack Developer
          </h2>
          <p className={styles.paragraph}>I like coding, coffee and podcasts</p>
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
