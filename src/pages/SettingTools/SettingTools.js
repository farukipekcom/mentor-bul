import "./SettingTools.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsToolCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SettingTools() {
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
          <div className="title">İlgilenilen Alanlar & Araçlar</div>
          <SettingsToolCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingTools;
