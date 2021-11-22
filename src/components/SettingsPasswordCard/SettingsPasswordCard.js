import "./SettingsPasswordCard.scss";
import FormInputTextCard from "../FormInputTextCard/FormInputTextCard";
function SettingsPasswordCard() {
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
      <div className="settingsCancelSaveCustomButton">
        <div className="settingsCancelSaveCustomButton-cancel">İptal</div>
        <div className="settingsCancelSaveCustomButton-save">Kaydet</div>
      </div>
    </div>
  );
}

export default SettingsPasswordCard;
