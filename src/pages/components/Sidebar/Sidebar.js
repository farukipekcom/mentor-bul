import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
} from "../../../components";
import "./Sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
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
