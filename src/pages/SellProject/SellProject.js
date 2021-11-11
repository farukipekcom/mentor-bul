import "./SellProject.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, ProjectSummaryCard } from "../../components";
function SellProject() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">Mentee’lere vermiş olduğum hizmetler</span>
          <ProjectSummaryCard value="Mentee" />
          <ProjectSummaryCard value="Mentee" />
          <ProjectSummaryCard value="Mentee" />
          <ProjectSummaryCard value="Mentee" />
          <ProjectSummaryCard value="Mentee" />
          <ProjectSummaryCard value="Mentee" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellProject;
