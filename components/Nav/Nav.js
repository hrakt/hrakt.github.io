import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const Nav = ({ sectionArr, darkMode }) => {
  return (
    <ul className={styles.navWrapper}>
      {sectionArr.map((title, key) => (
        <li className={styles.navItem}>
          <a className={styles.sectionWrapper} key={key} href={`#${title}`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
