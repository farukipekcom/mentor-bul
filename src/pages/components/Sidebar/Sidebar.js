import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
  PriceCard,
} from "../../../components";
import "./Sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
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
