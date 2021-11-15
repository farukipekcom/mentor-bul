import "./SettingsPaymentCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import {
  FormInputTextCard,
  FormInputSelectCard,
  FormInputTextareaCard,
} from "../../components";
import data from "../../json/cities.json";

function SettingsPaymentCard() {
  const [status, setStatus] = useState(0);
  const [city, setCity] = useState(data);
  console.log("SAYFA ICINDE", city);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsPaymentCard">
      {status ? (
        <a onClick={controlClick} className="settingsPaymentCard-edit">
          <Close />
        </a>
      ) : (
        <a onClick={controlClick} className="settingsPaymentCard-edit">
          <div className="settingsPaymentCard-edit-icon">
            <Edit />
          </div>
          <div className="settingsPaymentCard-edit-text">Düzenle</div>
        </a>
      )}
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Adınız
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? <FormInputTextCard data="Faruk" /> : "Faruk"}
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Soyadınız
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? <FormInputTextCard data="İpek" /> : "İpek"}
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            TC Kimlik No
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? <FormInputTextCard data="10010010010" /> : "10010010010"}
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">
            Cep Telefonu
          </span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? (
              <FormInputTextCard data="+90 553 113 1291" />
            ) : (
              "+90 553 113 1291"
            )}
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-one">
          <span className="settingsPaymentCard-fullwidth-one-title">IBAN</span>
          <span className="settingsPaymentCard-fullwidth-one-text">
            {status ? (
              <FormInputTextCard data="TR00 0000 0000 0000 0000 0000 00" />
            ) : (
              "TR00 0000 0000 0000 0000 0000 00"
            )}
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-one">
          <span className="settingsPaymentCard-fullwidth-one-title">Adres</span>
          <span className="settingsPaymentCard-fullwidth-one-text">
            {status ? (
              <FormInputTextCard data="Mentör mh. Mentör sk. Mentör apt. No: 1/1" />
            ) : (
              "Mentör mh. Mentör sk. Mentör apt. No: 1/1"
            )}
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">İl</span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? (
              <FormInputSelectCard data="Antalya" city={city} />
            ) : (
              "Antalya"
            )}
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingsPaymentCard-fullwidth-item-title">İlçe</span>
          <span className="settingsPaymentCard-fullwidth-item-text">
            {status ? (
              <FormInputSelectCard data="Antalya" city={city} />
            ) : (
              "Konyaaltı"
            )}
          </span>
        </div>
      </div>
      {status ? (
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

export default SettingsPaymentCard;
