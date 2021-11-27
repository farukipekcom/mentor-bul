import "./SettingGeneral.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsGeneralCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SettingGeneral() {
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
          <div className="title">Genel Ayarlar</div>
          <SettingsGeneralCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingGeneral;
