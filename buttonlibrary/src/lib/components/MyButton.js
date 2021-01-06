import React from "react";
import "./MyButton.css";

const MyButton = ({ type = "button", label, value="", onChange }) => (
  <div className="simple-form-group">
    <button
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    >{label && <label className="simple-text-label">{label}</label>}</button>
  </div>
);

export default MyButton;