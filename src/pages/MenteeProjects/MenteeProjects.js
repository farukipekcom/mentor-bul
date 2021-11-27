import "./MenteeProjects.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, ProjectCardHorizontal } from "../../components/";
import { slide as Menu } from "react-burger-menu";
function MenteeProjects() {
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
            <ProjectCardHorizontal active="1" />
            <ProjectCardHorizontal active="1" />
            <ProjectCardHorizontal active="1" />
            <ProjectCardHorizontal active="1" />
            <ProjectCardHorizontal active="1" />
            <ProjectCardHorizontal active="1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenteeProjects;
