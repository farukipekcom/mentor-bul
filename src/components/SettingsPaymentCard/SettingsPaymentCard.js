import "./SettingsPaymentCard.scss";
import { Edit } from "../../icons";
function SettingsPaymentCard() {
  return (
    <div className="settingsPaymentCard">
      <div className="settingsPaymentCard-edit">
        <div className="settingsPaymentCard-edit-icon">
          <Edit />
        </div>
        <div className="settingsPaymentCard-edit-text">Düzenle</div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Adınız
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">Faruk</span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Soyadınız
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">İpek</span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            TC Kimlik No
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            10010010010
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Cep Telefonu
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            +90 553 113 1291
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-one">
          <span className="settingsPaymentCard-fullwidth-one-title">IBAN</span>
          <span className="settingsPaymentCard-fullwidth-one-text">
            TR00 0000 0000 0000 0000 0000 00
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-one">
          <span className="settingsPaymentCard-fullwidth-one-title">Adres</span>
          <span className="settingsPaymentCard-fullwidth-one-text">
            Mentör mh. Mentör sk. Mentör apt. No: 1/1
          </span>
        </div>
      </div>

      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">İl</span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            Antalya
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">İlçe</span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            Konyaaltı
          </span>
        </div>
      </div>
    </div>
  );
}

export default SettingsPaymentCard;
