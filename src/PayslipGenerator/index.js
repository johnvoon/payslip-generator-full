import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FileSaver from "file-saver";
import { uploadCSV, resetState } from "./actionCreators";
import ErrorAlert from "components/ErrorAlert";
import InputFormGroup from "components/InputFormGroup";
import FileUploadFormGroup from "components/FileUploadFormGroup";
import ButtonToolbar from "components/ButtonToolbar";
import Button from "components/Button";
import { payslipGeneratorFormSelector } from "./selectors";

const mapStateToProps = state => {
  const { payslipGenerator } = state;

  return {
    ...payslipGenerator,
    filenameValue: payslipGeneratorFormSelector(state, "filename")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUploadCSV: content => {
      return dispatch(uploadCSV(content));
    },
    onResetState: () => {
      return dispatch(resetState());
    }
  };
};

class PayslipGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      requestSubmitted: false
    };
  }

  handleSubmit = data => {
    const { onUploadCSV, reset } = this.props;
    reset();
    this.setState({ requestSubmitted: true });

    let formData = new FormData();
    formData.append("file", data["file"][0]);

    onUploadCSV(formData).catch(err => {
      if (err.response.status >= 400) {
        this.setState({
          errorMessage: err.response.data.message
        });
      } else {
        this.setState({
          errorMessage: err.message
        });
      }
    });
  };

  saveCSVToFile = csv => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, `${this.props.filenameValue || "payslip"}.csv`);
  };

  render() {
    const {
      csv,
      filenameValue,
      handleSubmit,
      pristine,
      reset,
      submitting,
      onResetState,
      requestSubmitted
    } = this.props;
    const { errorMessage } = this.state;

    return (
      <main className="container-fluid">
        <h1>
          Payslip Generator
        </h1>
        <form>
          <Field
            name="file"
            component={FileUploadFormGroup}
            label="Employee CSV Data Source"
          />
          {errorMessage && <ErrorAlert message={errorMessage} />}
          <ButtonToolbar
            pristine={pristine}
            submitting={submitting}
            reset={reset}
            handleSubmit={handleSubmit(data => this.handleSubmit(data))}
          />
          {csv &&
            <div>
              <Field
                name="filename"
                type="text"
                component={InputFormGroup}
                label="Filename"
                placeholder="Enter a file name (optional)"
              />
              <Button
                customClassNames="btn-primary"
                type="button"
                handleClick={() => {
                  this.saveCSVToFile(csv);
                  onResetState();
                }}
              >
                Download {filenameValue || "payslip"}.csv
              </Button>
            </div>}
          {!csv &&
            requestSubmitted &&
            !errorMessage &&
            <p>Generating CSV...</p>}
        </form>
      </main>
    );
  }
}

PayslipGenerator.propTypes = {
  onUploadCSV: PropTypes.func.isRequired,
  onResetState: PropTypes.func.isRequired,
  requestSubmitted: PropTypes.bool,
  csv: PropTypes.string.isRequired,
  filenameValue: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "PayslipGenerator"
  })(PayslipGenerator)
);
