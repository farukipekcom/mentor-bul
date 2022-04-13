import "./FormInputTextareaCard.scss";
function FormInputTextareaCard({
  placeholder = "Bir şeyler giriniz...",
  name,
  value,
  onChange,
  className,
  minPrice,
  maxPrice,
}) {
  // const [value, setValue] = useState(data);
  // function onChange(e) {
  //   e.preventDefault();
  //   setValue(e.target.value);
  // }
  return (
    <div className="FormInputTextareaCard">
      <textarea
        placeholder={placeholder}
        className={`${className} FormInputTextareaCard-input`}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default FormInputTextareaCard;
