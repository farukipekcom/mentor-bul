import "./Profile.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
  ProjectCard,
  ReviewsCard,
} from "../../components";
function Profile() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileCard />
          <StaticsCard />
          <AboutCard />
          <ProfessionCard />
          <VerificationCard />
          <ShareCard />
        </div>
        <div className="content">
          <ProjectCard />
          <ReviewsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
