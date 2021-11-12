import "./SettingsGeneralEditCard.scss";
import { profilePhoto } from "../../images";
import { ArrowBottom } from "../../icons";
import {
  FormInputTextCard,
  FormInputTextareaCard,
  FormInputSelectCard,
} from "../";
function SettingsGeneralEditCard() {
  return (
    <div className="SettingsGeneralEditCard">
      <div className="SettingsGeneralEditCard-left">
        <img
          src={profilePhoto}
          alt=""
          className="SettingsGeneralEditCard-left-photo"
        />
      </div>
      <div className="SettingsGeneralEditCard-right">
        <div className="SettingsGeneralEditCard-right-username">
          farukipekcom
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-left">
            <div className="SettingsGeneralEditCard-right-item-left-title">
              Adınız
            </div>
            <div className="SettingsGeneralEditCard-right-item-left-input">
              <FormInputTextCard placeholder="Adınız" />
            </div>
          </div>
          <div className="SettingsGeneralEditCard-right-item-right">
            <div className="SettingsGeneralEditCard-right-item-right-title">
              Soyadınız
            </div>
            <div className="SettingsGeneralEditCard-right-item-right-input">
              <FormInputTextCard placeholder="Soyadınız" />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              Hakkımda
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputTextareaCard placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth halfinput">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              Uzmanlık Alanı
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputSelectCard placeholder="Seçiniz.." />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth halfinput">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              E-posta Adresi
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputTextCard placeholder="E-posta Adresi..." />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth halfinput">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              Cep Telefonu
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputTextCard placeholder="Cep Telefonu..." />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth halfinput">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              Ülke
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputSelectCard placeholder="Ülke Seçiniz.." />
            </div>
          </div>
        </div>
        <div className="SettingsGeneralEditCard-right-item">
          <div className="SettingsGeneralEditCard-right-item-fullwidth halfinput">
            <div className="SettingsGeneralEditCard-right-item-fullwidth-title">
              İl
            </div>
            <div className="SettingsGeneralEditCard-right-item-fullwidth-input">
              <FormInputSelectCard placeholder="İl Seçiniz.." />
            </div>
          </div>
        </div>{" "}
        <div className="SettingsGeneralEditCard-right-buttons">
          <div className="SettingsGeneralEditCard-right-buttons-cancel">
            İptal
          </div>
          <div className="SettingsGeneralEditCard-right-buttons-save">
            Kaydet
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsGeneralEditCard;
