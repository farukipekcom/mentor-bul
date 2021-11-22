import "./FormInputSelectCityCard.scss";
import { ArrowBottom } from "../../icons";
import { useState } from "react";
import data from "../../json/cities.json";
function FormInputSelectCityCard() {
  console.log("FORM ICINDE", data[0]);
  const [selectIl, setSelectedIl] = useState();
  const ilceler = data[parseInt(selectIl) - 1]?.ilceleri;
  return (
    <div className="inputCustom custom_select yanyana">
      <select
        name=""
        id=""
        className="inputCustom-input"
        onChange={(e) => setSelectedIl(e.target.value)}
      >
        {data.map((value, key) => {
          return <option value={value.plaka}>{value.il}</option>;
        })}
      </select>
      <ArrowBottom />
      {ilceler ? (
        <select name="" id="" className="inputCustom-input">
          {ilceler?.map((value, key) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      ) : (
        <select name="" id="" className="inputCustom-input">
          <option value="İlçe Seçiniz">İlçe Seçiniz</option>;
        </select>
      )}
      <ArrowBottom />
    </div>
  );
}

export default FormInputSelectCityCard;
