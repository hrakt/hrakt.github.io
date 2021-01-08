import styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = ({ toggle }) => {
  return (
    <div onClick={() => toggle()} className={styles["theme-switch-wrapper"]}>
      <label className={styles["theme-switch"]} for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className={styles["slider"]} round></div>
      </label>
    </div>
  );
};
export default DarkModeToggle;
