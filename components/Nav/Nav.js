import React, { useEffect, useState } from "react";

import styles from "./Nav.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import SvgIcon from "../SvgIcon";
import Link from "next/link";

const Nav = ({ sectionArr, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      window.scrollY !== 0 ? setNavSticky(true) : setNavSticky(false);
    };
    window.addEventListener("scroll", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleKeyDown);
    };
  });

  return (
    <header className={cx(styles.nav, { [styles.sticky]: navSticky })}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <SvgIcon iconType="Logo" className={styles.logo} />
        </div>
        {/* <div>{scrollPosition}</div>df */}
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
      </div>
    </header>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
  darkMode: PropTypes.bool,
};

export default Nav;
