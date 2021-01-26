import styles from "./DarkModeToggle.module.scss";
import cx from "classnames";

const DarkModeToggle = ({ darkMode, toggle }) => {
  return (
    <div onClick={() => toggle()} className={styles.themeSwitchWrapper}>
      <label className={styles.themeSwitch}>
        <div
          className={cx(styles.slider, { [styles.checked]: darkMode })}
        ></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
