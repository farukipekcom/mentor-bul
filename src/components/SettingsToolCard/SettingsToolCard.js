import "./SettingsToolCard.scss";
import { Edit, Close } from "../../icons";
function SettingsToolCard() {
  return (
    <div className="settingsToolCard">
      <div className="settingsToolCard-edit">
        <div className="settingsToolCard-edit-icon">
          <Edit />
        </div>
        <div className="settingsToolCard-edit-text">Düzenle</div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">Adobe XD</span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">Figma</span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">React</span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">
            Adobe Photoshop
          </span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">Java</span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
      <div className="settingsToolCard-list">
        <div className="settingsToolCard-list-item">
          <span className="settingsToolCard-list-item-name">Asp.net</span>
          <div className="settingsToolCard-list-item-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default SettingsToolCard;
