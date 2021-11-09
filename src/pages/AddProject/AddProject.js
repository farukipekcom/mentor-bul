import "./AddProject.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard } from "../../components";

function AddProject() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProject;
