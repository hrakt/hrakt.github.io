import React, { useState } from "react";

import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import SvgIcon from "../SvgIcon";

const Nav = ({ sectionArr, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <div
        className={cx(styles.hamburger, { [styles.open]: menuOpen })}
        onClick={handleClick}
      >
        <span></span>
      </div>
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
    </React.Fragment>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
