import React, { useState } from "react";

import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import SvgIcon from "../SvgIcon";
import Link from "next/link";

const Nav = ({ sectionArr, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <SvgIcon iconType="Logo" className={styles.logo} />
      </div>

      <div className={cx(styles.navContainer, { [styles.open]: menuOpen })}>
        <ul>
          {sectionArr.map((item, key) => {
            return (
              <li key={key} className={styles.navItem}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.hamburgerWrapper} onClick={handleClick}>
        <div
          className={cx(styles.center, { [styles.hamburgerOpen]: menuOpen })}
        >
          <div></div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
