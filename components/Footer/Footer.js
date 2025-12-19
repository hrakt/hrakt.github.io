import styles from "../Footer/Footer.module.scss";
import SvgIcon from "../SvgIcon";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <SvgIcon iconType="Logo" className={styles.logo} />
      </div>
      <p className={styles.iconHeading}>Find me here:</p>
      <div className={styles.iconContainer}>
        <a href="//github.com/hrakt/" className={styles.icon}>
          <SvgIcon iconType="Github" className={styles.github} />
        </a>

        <a href="//www.linkedin.com/in/hrakt/" className={styles.icon}>
          <SvgIcon iconType="Linkedin" className={styles.linkedin} />
        </a>
        <a href="//dribbble.com/hrakt" className={styles.icon}>
          <SvgIcon iconType="Dribble" className={styles.dribble} />
        </a>
      </div>

      <p>© Hrak Torousian. All rights reserved. 2021</p>
    </div>
  );
};

export default Footer;
