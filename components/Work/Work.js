import styles from "../Work/Work.module.scss";
import classNames from "classnames/bind";
import workArr from "./workArr";

var align;

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1>Latest Work</h1>
          <span>
            Here you can find some of of my work or the work I have been
            involved in
          </span>
        </div>
        {workArr.map((item, key) => {
          key % 2 === 0 ? (align = "left") : (align = "right");
          return (
            <div
              className={classNames(styles.item, styles[`item__${align}`])}
              key={key}
            >
              <div className={styles.item__textBox}>
                <div>{item.type}</div>
                <div>{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div className={styles.item__imageBox}>
                <img src={item.imgSrc} className={styles.item__image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
