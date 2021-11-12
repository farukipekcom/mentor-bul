import "./FormInputSelectCard.scss";
import { ArrowBottom } from "../../icons";
function FormInputSelectCard({ placeholder }) {
  return (
    <div className="FormInputTextCard custom_select">
      <select name="" id="" className="FormInputTextCard-input">
        <option value="Seçiniz.." default>
          Seçiniz..
        </option>
        <option value="Görüntülü Görüşme">Görüntülü Görüşme</option>
        <option value="Dosya Teslim">Dosya Teslim</option>
        <option value="Chat">Chat</option>
      </select>
      <ArrowBottom />
    </div>
  );
}

export default FormInputSelectCard;
