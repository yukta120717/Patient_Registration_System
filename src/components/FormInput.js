import React from 'react';

const FormInput = ({ label, type, name, value, onChange, icon }) => {
  return (
    <div className="form-input">
      <div className="input-icon">
        <i className={icon}></i>
      </div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
