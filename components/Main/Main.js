import styles from "../Main/Main.module.scss";
// import Button from '../common/Button';
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={styles["container"]}
    >
      <div className={styles["main-container"]}>
        <h1 className={styles["main-container__heading1"]}>
          Hi, I'm Hrak{" "}
          <motion.div
            className={styles["main-container__emoji"]}
            animate={{ rotate: [0, 0, 90, 90, 0] }}
            transition={{ duration: 2 }}
          >
            👋
          </motion.div>
        </h1>
        <h2 className={styles["main-container__heading2"]}>
          I'm a
          <div className={styles["slidingVertical"]}>
            <span>self-taught</span>
            <span>curious</span>
            <span>creative</span>
            <span>energetic</span>
          </div>
          web developer
        </h2>

        {/* <Button type="external" href="/about" title="About Me" /> */}
      </div>
    </motion.div>
  );
};
export default Main;
