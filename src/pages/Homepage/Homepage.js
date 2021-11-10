import "./Homepage.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  WelcomeCard,
  ProjectSquareCard,
  MentorCard,
} from "../../components";
function Homepage() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <WelcomeCard />
          <span className="rightSidebar-heading">Öne çıkan ilanlara gözat</span>
          <div className="rightSidebar-projects">
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
          </div>
          <span className="rightSidebar-heading">Popüler Mentörler</span>
          <div className="rightSidebar-mentors">
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
