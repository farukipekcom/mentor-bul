import "./SettingPassword.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsPasswordCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SettingPassword() {
  return (
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <SettingsMenuCard />
            </Menu>
          </div>
          <div className="title">Güvenlik Ayarları</div>
          <SettingsPasswordCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingPassword;
