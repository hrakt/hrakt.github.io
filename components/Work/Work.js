import styles from "../Work/Work.module.scss";
import classNames from "classnames/bind";
import workArr from "./workArr";
import Masonry from "react-masonry-css";
import Button from "../Button";

var align;

const Work = ({ portfolio }) => {
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
        {!portfolio ? (
          [
            workArr.map((item, key) => {
              key % 2 === 0 ? (align = "left") : (align = "right");
              return (
                <div
                  className={classNames(styles.item, styles[`item__${align}`])}
                  key={key}
                >
                  <div className={styles.item__textBox}>
                    <div>{item.type}</div>
                    <div>{item.title}</div>
                    <dibv>{item.description}</dibv>
                  </div>
                  <div className={styles.item__imageBox}>
                    <img src={item.imgSrc} className={styles.item__image} />
                  </div>
                </div>
              );
            }),
            <div className={styles.buttonContainer}>
              <Button theme="blue" link="/portfolio">
                View More
              </Button>
            </div>,
          ]
        ) : (
          <Masonry
            breakpointCols={{
              default: 3,
              1500: 2,
              1100: 1,
            }}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGrid__column}
          >
            {workArr.map((item, key) => {
              return (
                <div className={classNames(styles.item)} key={key}>
                  {/* <div className={styles.item__textBox}>
                <div>{item.type}</div>
                <div>{item.title}</div>
                <div>{item.description}</div>
              </div> */}
                  <div className={styles.item__imageBox}>
                    <img src={item.imgSrc} className={styles.item__image} />
                  </div>
                </div>
              );
            })}
          </Masonry>
        )}
      </div>
    </div>
  );
};

export default Work;
