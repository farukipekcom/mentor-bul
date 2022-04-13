import "./MenteeProjects.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, ProjectCardHorizontal } from "../../components/";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
function MenteeProjects() {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Projects/GetUserProject/1`
      );
      setProject(result.data);
      console.log("TAMAMI", result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, [isLoading]);
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
          <span className="heading">İlanlarım</span>
          <div className="list">
            {isLoading &&
              project.map((item) => (
                <ProjectCardHorizontal active="1" item={item} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenteeProjects;
