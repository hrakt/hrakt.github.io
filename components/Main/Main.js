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

        {/* <Button type="external" href="/about" title="About Me" /> */}
      </div>
    </motion.div>
  );
};
export default Main;
