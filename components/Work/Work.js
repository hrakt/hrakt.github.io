import styles from "../Work/Work.module.scss";
import classNames from "classnames/bind";
import workArr from "./workArr";

var align;

const Work = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <span>Portfolio</span>
        <h2>Check out few of my works</h2>
      </div>
      {workArr.map((item, key) => {
        key % 2 === 0 ? (align = "left") : (align = "right");
        return (
          <div
            className={classNames(styles["item"], styles[`item__${align}`])}
            key={key}
          >
            <div className={styles["item__textBox"]}>
              <div>{item.type}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
            <div className={styles["item__imageBox"]}>
              <img src={item.imgSrc} width="400" height="200" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
