import "./OfferProjects.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, ProjectOfferCard } from "../../components";

function OfferProjects() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">Teklif Verdiğim Hizmetler</span>
          <ProjectOfferCard value="Mentee" />
          <ProjectOfferCard value="Mentee" />
          <ProjectOfferCard value="Mentee" />
          <ProjectOfferCard value="Mentee" />
          <ProjectOfferCard value="Mentee" />
          <ProjectOfferCard value="Mentee" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferProjects;
