import "./FormInputTextareaCard.scss";

function FormInputTextareaCard({ placeholder = "Bir şeyler giriniz..." }) {
  return (
    <div className="FormInputTextareaCard">
      <textarea
        type="text"
        placeholder={placeholder}
        className="FormInputTextareaCard-input"
      />
    </div>
  );
}

export default FormInputTextareaCard;
