import "./FormInputTextCard.scss";
function FormInputTextCard({
  placeholder = "Bir şeyler giriniz...",
  type = "text",
  data,
  name,
  value,
  onChange,
  classSinif,
  minPrice,
  maxPrice,
}) {
  // const [valuee, setValuee] = useState(data);
  // function onChange(e) {
  //   e.preventDefault();
  //   setValuee(e.target.value);
  // }
  return (
    <div className="inputCustom">
      <input
        type={type}
        placeholder={placeholder}
        className={`${classSinif} inputCustom-input`}
        name={name}
        onChange={onChange}
        value={value}
        required
        min={(type = "number" && minPrice)}
        max={(type = "number" && maxPrice)}
      />
    </div>
  );
}

export default FormInputTextCard;
