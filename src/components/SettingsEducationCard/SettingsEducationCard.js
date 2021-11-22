import "./SettingsEducationCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import FormInputTextCard from "../FormInputTextCard/FormInputTextCard";

function SettingsEducationCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsEducationCard">
      {status ? (
        <button onClick={controlClick} className="settingsEditCustomButton">
          <Close />
        </button>
      ) : (
        <button onClick={controlClick} className="settingsEditCustomButton">
          <div className="settingsEditCustomButton-icon">
            <Edit />
          </div>
          <div className="settingsEditCustomButton-text">Düzenle</div>
        </button>
      )}
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingSubTitle">Okul Adı</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextCard data="Konya Teknik Üniversitesi" />
            ) : (
              "Konya Teknik Üniversitesi"
            )}
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingSubTitle">Bölüm Adı</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextCard data="Bilgisayar Mühendisliği" />
            ) : (
              "Bilgisayar Mühendisliği"
            )}
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingSubTitle">Mezuniyet Yılı</span>
          <span className="settingValue">
            {status ? <FormInputTextCard data="2022" /> : "2022"}
          </span>
        </div>
      </div>
      {status ? (
        <div className="settingsCancelSaveCustomButton">
          <div
            className="settingsCancelSaveCustomButton-cancel"
            onClick={controlClick}
          >
            İptal
          </div>
          <div className="settingsCancelSaveCustomButton-save">Kaydet</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SettingsEducationCard;
