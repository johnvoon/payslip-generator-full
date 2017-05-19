import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";

const ButtonToolbar = ({ pristine, submitting, reset, handleSubmit }) => {
  return (
    <div className="btn-toolbar">
      <Button
        customClassNames="btn-danger"
        type="button"
        disabled={pristine || submitting}
        handleClick={reset}
      >
        Reset Field
      </Button>
      <Button
        customClassNames="btn-primary"
        type="submit"
        disabled={submitting}
        handleClick={handleSubmit}
      >
        Generate Payslip Data
      </Button>
    </div>
  );
};

ButtonToolbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default ButtonToolbar;
