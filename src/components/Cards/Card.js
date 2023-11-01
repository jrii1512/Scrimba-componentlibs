import React from "react";
import classNames from "classnames";

export default function Card({
  children,
  header,
  className,
  isHoverable,
  badgeColor,
  icon,
  ...rest
}) {
  const classes = classNames(className, icon, badgeColor);
  isHoverable ? (className = "card.hover:hover") : (className = "");

  return (
    <span className={`Card ${classes}`} {...rest}>
      {icon}
      <p>{children}</p>
    </span>
  );
}
