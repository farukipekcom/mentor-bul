import "./SettingPassword.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsPasswordCard } from "../../components";

function SettingPassword() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Güvenlik Ayarları</div>
          <SettingsPasswordCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingPassword;
