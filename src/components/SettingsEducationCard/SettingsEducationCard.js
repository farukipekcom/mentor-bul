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
      {status == 0 ? (
        <a onClick={controlClick} className="settingsEducationCard-edit">
          <div className="settingsEducationCard-edit-icon">
            <Edit />
          </div>
          <div className="settingsEducationCard-edit-text">Düzenle</div>
        </a>
      ) : (
        <a onClick={controlClick} className="settingsEducationCard-edit">
          <Close />
        </a>
      )}
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Okul Adı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">
            {status == 1 ? (
              <FormInputTextCard data="Konya Teknik Üniversitesi" />
            ) : (
              "Konya Teknik Üniversitesi"
            )}
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Bölüm Adı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">
            {status == 1 ? (
              <FormInputTextCard data="Bilgisayar Mühendisliği" />
            ) : (
              "Bilgisayar Mühendisliği"
            )}
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Mezuniyet Yılı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">
            {status == 1 ? <FormInputTextCard data="2022" /> : "2022"}
          </span>
        </div>
      </div>
      {status == 1 ? (
        <div className="settingsGeneralCard-right-buttons">
          <div className="settingsGeneralCard-right-buttons-cancel">İptal</div>
          <div className="settingsGeneralCard-right-buttons-save">Kaydet</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SettingsEducationCard;
