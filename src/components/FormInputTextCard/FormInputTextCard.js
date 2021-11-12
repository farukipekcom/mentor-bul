import "./FormInputTextCard.scss";

function FormInputTextCard({ placeholder = "Bir şeyler giriniz..." }) {
  return (
    <div className="FormInputTextCard">
      <input
        type="text"
        placeholder={placeholder}
        className="FormInputTextCard-input"
      />
    </div>
  );
}

export default FormInputTextCard;
