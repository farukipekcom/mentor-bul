import "./Profile.scss";
import {
  ReviewsCard,
  ProjectSquareCard,
  ProjectCard,
  Offer,
} from "../../components";
import { Header, Category, Sidebar, Footer } from "../components";
import SimilarProject from "../../components/SimilarProject/SimilarProject";

function Profile() {
  return (
    <>
      <Header />
      <Category />
      <div className="profile">
        <Sidebar />
        <div className="profileContent">
          <Offer />
          <ProjectCard />
          <div className="profileContent-container">
            <div className="profileContent-container-heading">
              Aktif İlanlar
            </div>
            <div className="profileContent-container-list">
              <ProjectSquareCard />
              <ProjectSquareCard />
            </div>
          </div>

          <ReviewsCard />
        </div>
      </div>
      <SimilarProject />
      <Footer />
    </>
  );
}

export default Profile;
