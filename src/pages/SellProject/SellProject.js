import "./SellProject.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, ProjectSummaryCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SellProject() {
  return (
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <ProfileMenuCard />
            </Menu>
          </div>
          <span className="heading">Mentee’lere vermiş olduğum hizmetler</span>
          <div className="list">
            <ProjectSummaryCard value="Mentee" />
            <ProjectSummaryCard value="Mentee" />
            <ProjectSummaryCard value="Mentee" />
            <ProjectSummaryCard value="Mentee" />
            <ProjectSummaryCard value="Mentee" />
            <ProjectSummaryCard value="Mentee" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellProject;
