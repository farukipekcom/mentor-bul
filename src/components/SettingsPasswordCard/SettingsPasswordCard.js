import "./SettingsPasswordCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import FormInputTextCard from "../FormInputTextCard/FormInputTextCard";
function SettingsPasswordCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsPasswordCard">
      <div className="settingsPasswordCard-fullwidth">
        <div className="settingsPasswordCard-fullwidth-one">
          <span className="settingsPasswordCard-fullwidth-one-title">
            Geçerli Şifreniz
          </span>
          <span className="settingsPasswordCard-fullwidth-one-text">
            <FormInputTextCard data="" placeholder="Geçerli Şifreniz" />
          </span>
        </div>
      </div>
      <div className="settingsPasswordCard-fullwidth">
        <div className="settingsPasswordCard-fullwidth-one">
          <span className="settingsPasswordCard-fullwidth-one-title">
            Yeni Şifre
          </span>
          <span className="settingsPasswordCard-fullwidth-one-text">
            <FormInputTextCard data="" placeholder="Yeni Şifre" />
          </span>
        </div>
      </div>

      <div className="settingsPasswordCard-fullwidth">
        <div className="settingsPasswordCard-fullwidth-one">
          <span className="settingsPasswordCard-fullwidth-one-title">
            Yeni Şifre
          </span>
          <span className="settingsPasswordCard-fullwidth-one-text">
            <FormInputTextCard data="" placeholder="Yeni Şifre" />
          </span>
        </div>
      </div>

      <div className="settingsGeneralCard-right-buttons">
        <div className="settingsGeneralCard-right-buttons-cancel">İptal</div>
        <div className="settingsGeneralCard-right-buttons-save">Kaydet</div>
      </div>
    </div>
  );
}

export default SettingsPasswordCard;
