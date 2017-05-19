import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  customClassNames,
  type,
  handleClick,
  disabled
}) => {
  return (
    <button
      type={type}
      className={`btn text-uppercase ${customClassNames}`}
      onClick={handleClick}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  customClassNames: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
