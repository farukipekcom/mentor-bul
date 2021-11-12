import "./SettingTools.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsToolCard } from "../../components";
function SettingTools() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">İlgilenilen Alanlar & Araçlar</div>
          <SettingsToolCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingTools;
