import React, { useEffect, useState } from "react";

import styles from "./Nav.module.scss";
import cx from "classnames";
import SvgIcon from "../SvgIcon";
import Link from "next/link";

const Nav = ({}) => {
  const sectionArr = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Portfolio", href: "/" },
    { title: "Blog", href: "/" },
  ];

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

        <div className={styles.hamburgerWrapper} onClick={handleClick}>
          <div
            className={cx(styles.center, { [styles.hamburgerOpen]: menuOpen })}
          >
            <div></div>
          </div>
        </div>
      </div>
      <div
        className={cx(styles.navContainer, {
          [styles.open]: menuOpen,
          [styles.sticky]: navSticky,
        })}
      >
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
    </header>
  );
};

export default Nav;
