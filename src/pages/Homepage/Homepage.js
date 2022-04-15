import "./Homepage.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  WelcomeCard,
  ProjectSquareCard,
  MentorCard,
  Loading,
} from "../../components";
import { slide as Menu2 } from "react-burger-menu";
import axios from "axios";
import { useState, useEffect } from "react";
function Homepage({ e }) {
  const [project, setProject] = useState();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://localhost:5001/api/Projects/GetAllProjects",
        {
          params: {
            count: 4,
          },
        }
      );
      setProject(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://localhost:5001/api/users", {
        params: {
          count: 4,
        },
      });
      setUser(result.data);
      setIsLoading2(true);
    };
    fetchItems();
  }, []);
  const loggedIn = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="main homepage">
      <Header loggedIn={loggedIn} />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu2 burgerButtonClassName={"leftMenu"}>
              <ProfileMenuCard />
            </Menu2>
          </div>
          <WelcomeCard />
          <span className="main-heading">Öne çıkan ilanlara gözat</span>
          <div className="main-projects">
            {isLoading ? (
              project.map((item, index) => (
                <ProjectSquareCard key={index} item={item} />
              ))
            ) : (
              <Loading />
            )}
          </div>
          <span className="main-heading">Popüler Mentörler</span>
          <div className="main-mentors">
            {isLoading2 ? (
              user.map((item, index) => (
                <div className="mentorCard" key={index}>
                  <MentorCard key={index} item={item} />
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
