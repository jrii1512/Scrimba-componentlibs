import React from "react";
import classNames from "classnames";
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiFillWarning } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

export default function Banner({ children, type, className, ...rest }) {
  const classes = classNames(className, type);

  let icon;

  if (type === "success") {
    icon = <IoCheckmarkCircle />;
  }

  if (type === "warning") {
    icon = <AiFillWarning />;
  }

  if (type === "error") {
    icon = <FaTimesCircle />;
  }

  if (type === "neutral") {
    icon = <HiInformationCircle />;
  }

  return (
    <span className={`banner ${classes}`} {...rest}>
      { icon }
      { children }
    </span>
  );
}
