import "./FormInputTextCard.scss";
import React, { useState } from "react";
function FormInputTextCard({ placeholder = "Bir şeyler giriniz...", data }) {
  const [value, setValue] = useState(data);
  function onChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div className="inputCustom">
      <input
        type="text"
        placeholder={placeholder}
        className="inputCustom-input"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormInputTextCard;
