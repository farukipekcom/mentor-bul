import "./SettingsPaymentEditCard.scss";
import { Edit } from "../../icons";
function SettingsPaymentEditCard() {
  return (
    <div className="SettingsPaymentEditCard">
      <div className="SettingsPaymentEditCard-fullwidth">
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            Adınız
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            Faruk
          </span>
        </div>
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            Soyadınız
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            İpek
          </span>
        </div>
      </div>
      <div className="SettingsPaymentEditCard-fullwidth">
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            TC Kimlik No
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            10010010010
          </span>
        </div>
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            Cep Telefonu
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            +90 553 113 1291
          </span>
        </div>
      </div>
      <div className="SettingsPaymentEditCard-fullwidth">
        <div className="SettingsPaymentEditCard-fullwidth-one">
          <span className="SettingsPaymentEditCard-fullwidth-one-title">
            IBAN
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-one-text">
            TR00 0000 0000 0000 0000 0000 00
          </span>
        </div>
      </div>
      <div className="SettingsPaymentEditCard-fullwidth">
        <div className="SettingsPaymentEditCard-fullwidth-one">
          <span className="SettingsPaymentEditCard-fullwidth-one-title">
            Adres
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-one-text">
            Mentör mh. Mentör sk. Mentör apt. No: 1/1
          </span>
        </div>
      </div>

      <div className="SettingsPaymentEditCard-fullwidth">
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            İl
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            Antalya
          </span>
        </div>
        <div className="SettingsPaymentEditCard-fullwidth-item">
          <span className="SettingsPaymentEditCard-fullwidth-item-title">
            İlçe
          </span>
          <span className="SettingsPaymentEditCard-fullwidth-item-text">
            Konyaaltı
          </span>
        </div>
      </div>
    </div>
  );
}

export default SettingsPaymentEditCard;
