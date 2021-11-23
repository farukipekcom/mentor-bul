import "./SettingsPaymentCard.scss";
import { Edit, Close } from "../../icons";
import { useState } from "react";
import { FormInputTextCard, FormInputSelectCityCard } from "..";
function SettingsPaymentCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsPaymentCard">
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
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingSubTitle">Adınız</span>
          <span className="settingValue">
            {status ? <FormInputTextCard data="Faruk" /> : "Faruk"}
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingSubTitle">Soyadınız</span>
          <span className="settingValue">
            {status ? <FormInputTextCard data="İpek" /> : "İpek"}
          </span>
        </div>
      </div>
      <div className="settingsPaymentCard-fullwidth">
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingSubTitle">TC Kimlik No</span>
          <span className="settingValue">
            {status ? <FormInputTextCard data="10010010010" /> : "10010010010"}
          </span>
        </div>
        <div className="settingsPaymentCard-fullwidth-item">
          <span className="settingSubTitle">Cep Telefonu</span>
          <span className="settingValue">
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
          <span className="settingSubTitle">IBAN</span>
          <span className="settingValue">
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
          <span className="settingSubTitle">Adres</span>
          <span className="settingValue">
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
          <span className="settingSubTitle">İl / İlçe</span>
          <span className="settingValue">
            {status ? <FormInputSelectCityCard /> : "Antalya, Muratpaşa"}
          </span>
        </div>
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
  );
}

export default SettingsPaymentCard;
