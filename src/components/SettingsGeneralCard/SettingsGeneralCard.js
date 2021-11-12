import "./SettingsGeneralCard.scss";
import { profilePhoto } from "../../images";
import { Edit, Close } from "../../icons";
import {
  FormInputTextCard,
  FormInputSelectCard,
  FormInputTextareaCard,
} from "../../components";
import { useState } from "react";
function SettingsGeneralCard() {
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };
  return (
    <div className="settingsGeneralCard">
      {status == 0 ? (
        <a onClick={controlClick}>
          <div className="settingsGeneralCard-edit">
            <div className="settingsGeneralCard-edit-icon">
              <Edit />
            </div>
            <div className="settingsGeneralCard-edit-text">Düzenle</div>
          </div>
        </a>
      ) : (
        <a onClick={controlClick}>
          <div className="settingsGeneralCard-edit">
            <Close />
          </div>
        </a>
      )}

      <div className="settingsGeneralCard-left">
        <img
          src={profilePhoto}
          alt=""
          className="settingsGeneralCard-left-photo"
        />
      </div>
      <div className="settingsGeneralCard-right">
        <span className="settingsGeneralCard-right-fullname">Faruk İpek</span>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            Kullanıcı Adı
          </span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputTextCard placeholder="farukipekcom" />
            ) : (
              "farukipekcom"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">Hakkımda</span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputTextareaCard placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error amet sapiente exercitationem blanditiis vitae consectetur? Reiciendis ipsam aliquam temporibus minus rerum, quisquam cum, ea distinctio in omnis fugit sunt." />
            ) : (
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error amet sapiente exercitationem blanditiis vitae consectetur? Reiciendis ipsam aliquam temporibus minus rerum, quisquam cum, ea distinctio in omnis fugit sunt."
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            Uzmanlık Alanı
          </span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputSelectCard placeholder="Frontend Developer" />
            ) : (
              "Frontend Developer"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            E-posta Adresi
          </span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputTextCard placeholder="farukipekweb@gmail.com" />
            ) : (
              "farukipekweb@gmail.com"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">
            Cep Telefonu
          </span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputTextCard placeholder="+90 553 113 1291" />
            ) : (
              "+90 553 113 1291"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">Ülke</span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputSelectCard placeholder="Türkiye" />
            ) : (
              "Türkiye"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingsGeneralCard-right-item-title">Şehir</span>
          <span className="settingsGeneralCard-right-item-text">
            {status == 1 ? (
              <FormInputSelectCard placeholder="Antalya" />
            ) : (
              "Antalya"
            )}
          </span>
        </div>
        {status == 1 ? (
          <div className="settingsGeneralCard-right-buttons">
            <div className="settingsGeneralCard-right-buttons-cancel">
              İptal
            </div>
            <div className="settingsGeneralCard-right-buttons-save">Kaydet</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SettingsGeneralCard;
