import "./SettingsToolCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import { FormInputTextCard } from "../../components";
function SettingsToolCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsToolCard">
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
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? <FormInputTextCard data="Adobe XD" /> : "Adobe XD"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? <FormInputTextCard data="Figma" /> : "Figma"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? <FormInputTextCard data="React" /> : "React"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? (
              <FormInputTextCard data="Adobe Photoshop" />
            ) : (
              "Adobe Photoshop"
            )}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? <FormInputTextCard data="Java" /> : "Java"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status ? <FormInputTextCard data="Asp.net" /> : "Asp.net"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
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
    </div>
  );
}

export default SettingsToolCard;
