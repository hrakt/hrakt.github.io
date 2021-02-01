import cx from "classnames";
import styles from "./SvgIcon.module.scss";

import icons from "./icons";

const SvgIcon = ({ className, iconType }) => {
  return (
    <div
      className={cx(className, styles.wrapper)}
      dangerouslySetInnerHTML={{ __html: icons[iconType] }}
    />
  );
};

export default SvgIcon;
