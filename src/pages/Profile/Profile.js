import "./Profile.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
  ProjectSquareCard,
  ProjectCard,
  ReviewsCard,
  UserProjectList,
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
          <UserProjectList />
          <ReviewsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
