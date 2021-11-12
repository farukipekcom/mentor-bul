import {
  Settings,
  Payment,
  Education,
  Tool,
  Securityv2,
  Profile,
} from "../../icons";
import "./SettingsMenuCard.scss";

function SettingsMenuCard() {
  return (
    <div className="settingsMenuCard">
      <span className="settingsMenuCard-title">Ayarlar</span>
      <div className="settingsMenuCard-menu">
        <a href="/settingsGeneral">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Settings />
            </div>
            <div className="settingsMenuCard-menu-item-name">Genel Ayarlar</div>
          </div>
        </a>
        <a href="/settingsPayment">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Payment />
            </div>
            <div className="settingsMenuCard-menu-item-name">
              Ödeme Bilgileri
            </div>
          </div>
        </a>

        <a href="">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Education />
            </div>
            <div className="settingsMenuCard-menu-item-name">
              Eğitim Bilgileri
            </div>
          </div>
        </a>
        <a href="">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Tool />
            </div>
            <div className="settingsMenuCard-menu-item-name">
              İlgilenilen Alanlar & Araçlar
            </div>
          </div>
        </a>
        <a href="">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Securityv2 />
            </div>
            <div className="settingsMenuCard-menu-item-name">Güvenlik</div>
          </div>
        </a>
        <div className="settingsMenuCard-seperator"></div>
        <a href="/profile">
          <div className="settingsMenuCard-menu-item">
            <div className="settingsMenuCard-menu-item-icon">
              <Profile />
            </div>
            <div className="settingsMenuCard-menu-item-name">Hesabım</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SettingsMenuCard;
