import "./BoughtProject.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, ProjectSummaryCard } from "../../components/";
function BoughtProject() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">Mentör’lerden almış olduğum hizmetler</span>
          <ProjectSummaryCard />
          <ProjectSummaryCard />
          <ProjectSummaryCard />
          <ProjectSummaryCard />
          <ProjectSummaryCard />
          <ProjectSummaryCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BoughtProject;
