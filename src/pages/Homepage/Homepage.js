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
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <WelcomeCard />
          <span className="main-heading">Öne çıkan ilanlara gözat</span>
          <div className="main-projects">
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
          </div>
          <span className="main-heading">Popüler Mentörler</span>
          <div className="main-mentors">
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
