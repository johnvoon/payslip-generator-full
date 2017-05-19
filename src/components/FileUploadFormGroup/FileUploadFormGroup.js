import React from "react";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const FileUploadFormGroup = field => {
  const { input, label, meta } = field;
  const error = meta.touched && meta.error;
  const files = input.value;

  return (
    <div className="form-group">
      {label
        ? <label className={classNames("input-label", { "text-error": error })}>
            {label}
            <span />
          </label>
        : null}
      <Dropzone
        className="dropzone"
        activeClassName="dropzone-active"
        name={input.name}
        multiple={false}
        onDrop={files => input.onChange(files)}
      >
        {files
          ? <div>{files[0].name}</div>
          : <div>Drop a .csv file here or click to browse</div>}
      </Dropzone>
      {error && <span className="text-error">{meta.error}</span>}
    </div>
  );
};

export default FileUploadFormGroup;
