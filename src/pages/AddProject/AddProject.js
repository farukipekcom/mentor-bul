import "./AddProject.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, AddProjectAllPart } from "../../components";
import { slide as Menu } from "react-burger-menu";
function AddProject() {
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
          <AddProjectAllPart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProject;
