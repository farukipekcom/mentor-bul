import "./SettingEducation.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsEducationCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SettingEducation() {
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
          <div className="title">Eğitim Bilgileri</div>
          <SettingsEducationCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingEducation;
