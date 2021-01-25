import { useState } from "react";
import styles from "./DarkModeToggle.module.scss";
import cx from "classnames";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div onClick={() => toggle()} className={styles.themeSwitchWrapper}>
      <label className={styles.themeSwitch}>
        <div
          className={cx(styles.slider, { [styles.checked]: darkMode })}
          round
        ></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
