import "./Project.scss";
import {
  ProjectCard,
  ReviewsCard,
  PriceCard,
  ProjectProfileCard,
  SimilarProject,
} from "../../components";
import { Header, Category, Footer } from "../../pages/components";
function Project() {
  return (
    <div className="main projectPage">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <div className="tabs">
            <div className="tabs-item active">Proje</div>
            <div className="tabs-item">
              <a href="/offer">Teklifler</a>
            </div>
          </div>
          <ProjectCard />
          <ReviewsCard />
        </div>
        <div className="sidebar">
          <PriceCard />
          <ProjectProfileCard />
        </div>
      </div>
      <SimilarProject />
      <Footer />
    </div>
  );
}

export default Project;
