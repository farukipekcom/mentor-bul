import "./FormInputSelectCard.scss";
import { ArrowBottom } from "../../icons";
import { useState } from "react";
function FormInputSelectCard({ placeholder, city }) {
  console.log("FORM ICINDE", city);
  // const [selectedCountry, setSelectedCountry] = useState();
  // const [selectedState, setSelectedState] = useState();
  // const [selectedCity, setSelectedCity] = useState();

  // const availableState = city.countries.find((c) => c.name === selectedCountry);
  // const availableCities = availableState?.states?.find(
  //   (s) => s.name === selectedState
  // );
  return (
    <div className="FormInputTextCard custom_select">
      {/* <select name="" id="" className="FormInputTextCard-input">
        {city.map((item) => {
          return <option value={item.il}>{item.il}</option>;
        })}
      </select>
      <ArrowBottom /> */}
    </div>
  );
}

export default FormInputSelectCard;
