import "./BoughtProject.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, ProjectSummaryCard } from "../../components/";
import { slide as Menu } from "react-burger-menu";
function BoughtProject() {
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
          <span className="heading">Mentör’lerden almış olduğum hizmetler</span>
          <div className="list">
            <ProjectSummaryCard value="Mentör" />
            <ProjectSummaryCard value="Mentör" />
            <ProjectSummaryCard value="Mentör" />
            <ProjectSummaryCard value="Mentör" />
            <ProjectSummaryCard value="Mentör" />
            <ProjectSummaryCard value="Mentör" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BoughtProject;
