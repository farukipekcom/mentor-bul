import "./SettingsToolCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import {
  FormInputTextCard,
  FormInputSelectCard,
  FormInputTextareaCard,
} from "../../components";
function SettingsToolCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsToolCard">
      {status == 0 ? (
        <a onClick={controlClick}>
          <div className="settingsToolCard-edit">
            <div className="settingsToolCard-edit-icon">
              <Edit />
            </div>
            <div className="settingsToolCard-edit-text">Düzenle</div>
          </div>
        </a>
      ) : (
        <a onClick={controlClick}>
          <div className="settingsToolCard-edit">
            <Close />
          </div>
        </a>
      )}
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? <FormInputTextCard data="Adobe XD" /> : "Adobe XD"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? <FormInputTextCard data="Figma" /> : "Figma"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? <FormInputTextCard data="React" /> : "React"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? (
              <FormInputTextCard data="Adobe Photoshop" />
            ) : (
              "Adobe Photoshop"
            )}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? <FormInputTextCard data="Java" /> : "Java"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>

        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            {status == 1 ? <FormInputTextCard data="Asp.net" /> : "Asp.net"}
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default SettingsToolCard;
