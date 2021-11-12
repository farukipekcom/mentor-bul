import "./SettingsGeneralCard.scss";
import { profilePhoto } from "../../images";
import { Edit } from "../../icons";
function SettingsGeneralCard() {
  return (
    <div className="settingsGeneralCard">
      <a href="/editSettingsGeneral">
        <div className="settingsGeneralCard-edit">
          <div className="settingsGeneralCard-edit-icon">
            <Edit />
          </div>
          <div className="settingsGeneralCard-edit-text">Düzenle</div>
        </div>
      </a>
      <div className="settingsGeneralCard-left">
        <img
          src={profilePhoto}
          alt=""
          className="settingsGeneralCard-left-photo"
        />
      </div>
      <div className="settingsGeneralCard-right">
        <div className="settingsGeneralCard-right-heading">
          <span className="settingsGeneralCard-right-heading-username">
            farukipekcom
          </span>
        </div>
        <span className="settingsGeneralCard-right-fullname">Faruk İpek</span>
        <span className="settingsGeneralCard-right-about">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          error amet sapiente exercitationem blanditiis vitae consectetur?
          Reiciendis ipsam aliquam temporibus minus rerum, quisquam cum, ea
          distinctio in omnis fugit sunt.
        </span>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            Uzmanlık Alanı
          </span>
          <span className="settingsGeneralCard-right-item-text">
            Frontend Developer
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            E-posta Adresi
          </span>
          <span className="settingsGeneralCard-right-item-text">
            farukipekweb@gmail.com
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            Cep Telefonu
          </span>
          <span className="settingsGeneralCard-right-item-text">
            +90 553 113 1291
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">Ülke</span>
          <span className="settingsGeneralCard-right-item-text">Türkiye</span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">Şehir</span>
          <span className="settingsGeneralCard-right-item-text">Antalya</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsGeneralCard;
