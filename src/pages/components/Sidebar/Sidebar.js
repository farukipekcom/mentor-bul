import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
  PriceCard,
} from "../../../components";
import ProjectProfileCard from "../../../components/ProjectProfileCard/ProjectProfileCard";
import "./Sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
      <ProjectProfileCard />
      <PriceCard />
      <ProfileCard />
      <StaticsCard />
      <AboutCard />
      <ProfessionCard />
      <VerificationCard />
      <ShareCard />
    </div>
  );
}

export default Sidebar;
