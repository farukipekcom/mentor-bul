import "./SendOffer.scss";
import {
  ProjectCard,
  ProjectProfileCard,
  OfferFormCard,
} from "../../components";
import { Header, Category, Footer } from "../../pages/components";
function SendOffer() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <ProjectCard />
          <OfferFormCard />
        </div>
        <div className="sidebar">
          <ProjectProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SendOffer;
