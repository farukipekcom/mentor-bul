import "./SettingEducation.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsEducationCard } from "../../components";

function SettingEducation() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Eğitim Bilgileri</div>
          <SettingsEducationCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingEducation;
