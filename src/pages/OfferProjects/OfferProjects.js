import "./OfferProjects.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, ProjectOfferCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function OfferProjects() {
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
          <span className="heading">Teklif Verdiğim Hizmetler</span>
          <div className="list">
            <ProjectOfferCard value="Mentee" />
            <ProjectOfferCard value="Mentee" />
            <ProjectOfferCard value="Mentee" />
            <ProjectOfferCard value="Mentee" />
            <ProjectOfferCard value="Mentee" />
            <ProjectOfferCard value="Mentee" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferProjects;
