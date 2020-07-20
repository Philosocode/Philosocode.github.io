import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ name, onChange, onBlur, placeholder, touched, type, value }) => { 
  const inputClasses = touched
    ? "c-form__input is-touched"
    : "c-form__input";

  function renderInput() {
    return (
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder ?? nameCapitalized}
        id={name}
        name={name}
        required
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }

  function renderTextArea() {
    return (
      <textarea
        className={inputClasses}
        id={name}
        name={name}
        placeholder={placeholder ?? "Enter your message..."}
        rows={8}
        maxLength={999}
        required
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    )
  }

  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="c-form__group">
      {
        type === "textarea"
          ? renderTextArea()
          : renderInput()
      }
      <div className="c-form__border"></div>
      <label
        id={name}
        htmlFor={name}
        className="c-heading--condensed c-form__label"
      >{nameCapitalized}</label>
    </div>
  )
 }

 FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default FormGroup;