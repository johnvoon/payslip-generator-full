import React from "react";
import PropTypes from "prop-types";

const SuccessAlert = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      <span className="" aria-hidden="true" />
      <span className="sr-only">Success:</span>
      {message}
    </div>
  );
};

SuccessAlert.propTypes = {
  message: PropTypes.string.isRequired
};

export default SuccessAlert;
