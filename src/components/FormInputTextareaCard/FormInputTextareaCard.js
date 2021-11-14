import "./FormInputTextareaCard.scss";

import { useState } from "react";
function FormInputTextareaCard({ placeholder = "Bir şeyler giriniz...", data }) { 
  const [value,setValue] = useState(data);
  function onChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div className="FormInputTextareaCard">
      <textarea
        type="text"
        placeholder={placeholder}
        className="FormInputTextareaCard-input"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormInputTextareaCard;
