import "./Homepage.scss";
import { Header, Category, Footer } from "../components";
import { useState } from "react";
import {
  ProfileMenuCard,
  WelcomeCard,
  ProjectSquareCard,
  MentorCard,
} from "../../components";
import { slide as Menu2 } from "react-burger-menu";
function Homepage() {
  return (
    <div className="main homepage">
      <Header />
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
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
            <ProjectSquareCard />
          </div>
          <span className="main-heading">Popüler Mentörler</span>
          <div className="main-mentors">
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
