import React from "react";
import classNames from "classnames";

export default function Badge({
  children,
  color,
  variant,
  className,
  ...rest
}) {
  const classes = classNames(className, color, variant);
  return (
    <span className={`badge ${classes}`} {...rest}>
      {children}
    </span>
  );
}
