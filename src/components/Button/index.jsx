import React from "react";
import clsx from "clsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({
  varient = "btn-success",
  className,
  children,
  type,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={clsx("btn h-50", varient, className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
