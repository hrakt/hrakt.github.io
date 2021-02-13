import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

const Button = ({ children, theme, className, link }) => {
  return (
    <div
      className={cx(styles.button, className, {
        [styles.blue]: theme === "blue",
        [styles.grey]: theme === "grey",
      })}
    >
      <a href={link}>{children}</a>
    </div>
  );
};

export default Button;
