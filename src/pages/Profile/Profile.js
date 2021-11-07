import "./Profile.scss";
import { ReviewsCard, ProjectSquareCard } from "../../components";
import { Header, Category, Sidebar, Footer } from "../components";

function Profile() {
  return (
    <>
      <Header />
      <Category />
      <div className="profile">
        <Sidebar />
        <div className="profileContent">
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
      <Footer />
    </>
  );
}

export default Profile;
