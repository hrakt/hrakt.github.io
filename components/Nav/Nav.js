import styles from "./Nav.module.scss";
import PropTypes from "prop-types";

const Nav = ({ sectionArr }) => {
  return (
    <nav className={styles.navWrapper}>
      {sectionArr.map((title, key) => (
        <div className={styles.sectionWrapper}>
          <div className={styles.dotWrapper}>
            <div className={styles.dot} />
          </div>
          <section className={styles.section} key={key}>
            {title}
          </section>
        </div>
      ))}
    </nav>
  );
};

Nav.propTpes = {
  sectionArr: PropTypes.array.isRequired,
};

export default Nav;
