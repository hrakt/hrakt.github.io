import styles from "../Footer/Footer.module.scss";
import SvgIcon from "../SvgIcon";
import cx from "classnames";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <SvgIcon iconType="Logo" className={styles.logo} />
      </div>
      <p classNam={styles.iconHeading}>Find me here:</p>
      <div className={styles.iconContainer}>
        <SvgIcon iconType="Github" className={cx(styles.icon, styles.github)} />
        <SvgIcon
          iconType="Linkedin"
          className={cx(styles.icon, styles.linkedin)}
        />
        <SvgIcon
          iconType="Dribble"
          className={cx(styles.icon, styles.dribble)}
        />
      </div>

      <p>© Hrak Torousian. All rights reserved. 2021</p>
    </div>
  );
};

export default Footer;
