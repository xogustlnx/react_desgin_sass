import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ children, size, color, outline, full, ...rest }) => {
  return (
    <button
      className={classNames("Button", size, color, { outline }, { full })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
