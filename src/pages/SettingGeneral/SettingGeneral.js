import "./SettingGeneral.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsGeneralCard } from "../../components";

function SettingGeneral() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Genel Ayarlar</div>
          <SettingsGeneralCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingGeneral;
