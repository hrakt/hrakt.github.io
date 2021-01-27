import { useState, useEffect } from "react";
import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const Nav = ({ sectionArr }) => {
  const [shownKey, setShownKey] = useState(-1);

  return (
    <nav className={styles.navWrapper}>
      {sectionArr.map((title, key) => (
        <a
          className={styles.sectionWrapper}
          key={key}
          onMouseEnter={() => setShownKey(key)}
          onMouseLeave={() => setShownKey(-1)}
          href={`#${title}`}
        >
          <div className={styles.dotWrapper}>
            <div
              className={cx(styles.dot, {
                [styles.shown]: key === shownKey,
              })}
            />
          </div>
          <section
            className={cx(styles.section, {
              [styles.shown]: key === shownKey,
            })}
          >
            {title}
          </section>
        </a>
      ))}
    </nav>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
};

export default Nav;
