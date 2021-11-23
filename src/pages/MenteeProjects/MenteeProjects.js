import "./MenteeProjects.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, ProjectCardHorizontal } from "../../components/";
function MenteeProjects() {
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
          <ProjectCardHorizontal active="1" />
          <ProjectCardHorizontal active="1" />
          <ProjectCardHorizontal active="1" />
          <ProjectCardHorizontal active="1" />
          <ProjectCardHorizontal active="1" />
          <ProjectCardHorizontal active="1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenteeProjects;
