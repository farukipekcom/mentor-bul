import "./SettingsGeneralCard.scss";
import { profilePhoto } from "../../images";
import { Edit, Close, ArrowBottom } from "../../icons";
import data from "../../json/cities.json";
import { FormInputTextCard, FormInputTextareaCard } from "../../components";
import { useState } from "react";

function SettingsGeneralCard() {
  const sehir = data.map((item) => {
    return item.il;
  });
  const [status, setStatus] = useState(0);
  const controlClick = () => {
    setStatus(!status);
  };

  return (
    <div className="settingsGeneralCard">
      {status ? (
        <button onClick={controlClick}>
          <div className="settingsEditCustomButton">
            <Close />
          </div>
        </button>
      ) : (
        <button onClick={controlClick}>
          <div className="settingsEditCustomButton">
            <div className="settingsEditCustomButton-icon">
              <Edit />
            </div>
            <div className="settingsEditCustomButton-text">Düzenle</div>
          </div>
        </button>
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
          <span className="settingSubTitle">Kullanıcı Adı</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextCard data="farukipekcom" />
            ) : (
              "farukipekcom"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">Hakkımda</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextareaCard data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error amet sapiente exercitationem blanditiis vitae consectetur? Reiciendis ipsam aliquam temporibus minus rerum, quisquam cum, ea distinctio in omnis fugit sunt." />
            ) : (
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error amet sapiente exercitationem blanditiis vitae consectetur? Reiciendis ipsam aliquam temporibus minus rerum, quisquam cum, ea distinctio in omnis fugit sunt."
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">Uzmanlık Alanı</span>
          <span className="settingValue">
            {status ? (
              <div className="inputCustom">
                <select name="" id="" className="inputCustom-input">
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Grafik Tasarımcı">Grafik Tasarımcı</option>
                  <option value="Ses Sanatçısı">Ses Sanatçısı</option>
                  <option value="Makale Yazarı">Makale Yazarı</option>
                </select>
                <ArrowBottom />
              </div>
            ) : (
              "Frontend Developer"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">E-posta Adresi</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextCard data="farukipekweb@gmail.com" />
            ) : (
              "farukipekweb@gmail.com"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">Cep Telefonu</span>
          <span className="settingValue">
            {status ? (
              <FormInputTextCard data="+90 553 113 1291" />
            ) : (
              "+90 553 113 1291"
            )}
          </span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">Ülke</span>
          <span className="settingValue">Türkiye</span>
        </div>
        <div className="settingsGeneralCard-right-item">
          <span className="settingSubTitle">Şehir</span>
          <span className="settingValue">
            {status ? (
              <div className="inputCustom">
                <select name="" id="" className="inputCustom-input">
                  {sehir.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
                <ArrowBottom />
              </div>
            ) : (
              "Antalya"
            )}
          </span>
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
    </div>
  );
}

export default SettingsGeneralCard;
