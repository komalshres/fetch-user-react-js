import React from "react";
import clsx from "clsx";

const Input = ({
  type = "text",
  className,
  value,
  placeholder = "enter user id",
  onChange,
  required,
  onKeyPress,
}) => {
  return (
    <input
      type={type}
      className={clsx("form-control w-25", className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
