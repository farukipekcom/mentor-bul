import "./SettingGeneralEdit.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsGeneralEditCard } from "../../components";

function SettingGeneralEdit() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Genel Ayarlar - Düzenle</div>
          <SettingsGeneralEditCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingGeneralEdit;
