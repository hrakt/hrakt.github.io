import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import SvgIcon from "../SvgIcon/index";

const Button = ({ children, theme, className, link, icon }) => {
  return (
    <div
      className={cx(styles.button, className, {
        [styles.blue]: theme === "blue",
        [styles.grey]: theme === "grey",
      })}
    >
      <a href={link}>{children}</a>
      {icon && <SvgIcon iconType={icon} />}
    </div>
  );
};

export default Button;
