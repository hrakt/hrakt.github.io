import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import SvgIcon from "../SvgIcon";

const Nav = ({ sectionArr, darkMode }) => {
  return (
    <ul className={styles.navWrapper}>
      <SvgIcon iconType="Logo" className={styles.logo} />
      <div className={styles.sectionWrapper}>
        {sectionArr.map((title, key) => (
          <li key={key} className={styles.navItem}>
            <a href={`#${title}`}>{title}</a>
          </li>
        ))}
      </div>
    </ul>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
