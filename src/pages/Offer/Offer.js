import "./Offer.scss";
import { OfferCard, OfferStatics, ProjectSquareCard } from "../../components";
import { Header, Category, Footer } from "../components";
function Offer() {
  return (
    <div className="main offerPage">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <div className="tabs">
            <div className="tabs-item">
              <a href="/project">Proje</a>
            </div>
            <div className="tabs-item active">Teklifler</div>
          </div>
          {/* <div className="rightSidebar-heading">Teklifler</div> */}
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
        <div className="sidebar">
          <OfferStatics />
          <ProjectSquareCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Offer;
