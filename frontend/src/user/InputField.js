import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./InputField.css";

const InputField = memo(({ className = "", label, propFlex, propHeight }) => {
  const inputFieldStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div className={`input-field1 ${className}`} style={inputFieldStyle}>
      <div className="label1">{label}</div>
      <div className="description1">Description</div>
      <div className="input1">
        <input className="value1" placeholder="Value" type="text" />
      </div>
      <div className="error1">Error</div>
    </div>
  );
});

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default InputField;
