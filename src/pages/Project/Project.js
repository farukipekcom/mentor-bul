import "./Project.scss";
import {
  ProjectCard,
  ReviewsCard,
  PriceCard,
  ProjectProfileCard,
} from "../../components";
import { Header, Category, Footer } from "../../pages/components";
function Project() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <ProjectCard />
          <ReviewsCard />
        </div>
        <div className="sidebar">
          <PriceCard />
          <ProjectProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
