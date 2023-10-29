import React from "react";
import classNames from "classnames";

export default function Banner({
  children,
  variant,
  color,
  title,
  text,
  className,
  ...rest
}) {
  const classes = classNames(className, variant, color, title, text);
  
  return (
    <span className={`${classes}`} {...rest}>
      {children}
    </span>
  );
}
