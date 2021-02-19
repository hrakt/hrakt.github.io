import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const Nav = ({ sectionArr, darkMode }) => {
  return (
    <div className={styles.navWrapper}>
      {sectionArr.map((title, key) => (
        <a className={styles.sectionWrapper} key={key} href={`#${title}`}>
          {title}
        </a>
      ))}
    </div>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
