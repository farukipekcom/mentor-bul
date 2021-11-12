import "./SettingsEducationCard.scss";
import { Edit } from "../../icons";
function SettingsEducationCard() {
  return (
    <div className="settingsEducationCard">
      <div className="settingsEducationCard-edit">
        <div className="settingsEducationCard-edit-icon">
          <Edit />
        </div>
        <div className="settingsEducationCard-edit-text">Düzenle</div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Okul Adı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">
            Konya Teknik Üniversitesi
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Bölüm Adı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">
            Bilgisayar Mühendisliği
          </span>
        </div>
      </div>
      <div className="settingsEducationCard-fullwidth">
        <div className="settingsEducationCard-fullwidth-one">
          <span className="settingsEducationCard-fullwidth-one-title">
            Mezuniyet Yılı
          </span>
          <span className="settingsEducationCard-fullwidth-one-text">2022</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsEducationCard;
