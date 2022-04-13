import "./Profile.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileCard,
  StaticsCard,
  AboutCard,
  ProfessionCard,
  VerificationCard,
  ShareCard,
  CommentCard,
  UserProjectList,
  Loading,
} from "../../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Profile() {
  const [project, setProject] = useState();
  const [comment, setComment] = useState();
  const [total, setTotal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let { username } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Users/GetUserDetails/${username}`
      );
      setProject(result.data);
      setComment(result.data.commentOwners);
      setIsLoading(true);
    };
    fetchItems();
  }, [username]);
  useEffect(() => {
    isLoading &&
      setTotal(
        comment.reduce(function (accumulator, item) {
          return accumulator + item.commentRate;
        }, 0) / comment.length
      );
  }, [isLoading]);
  var son = Math.round(total * 2) / 2;
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="main profilePage">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          {isLoading ? (
            <ProfileCard
              username={project.username}
              profilePhoto={project.profilePhoto}
              city={project.city}
              country={project.country}
              rate={son}
              count={comment.length}
              loggedIn={loggedIn.username}
            />
          ) : (
            <Loading />
          )}
          {isLoading ? <StaticsCard user={project} /> : ""}
          {isLoading ? <AboutCard /> : ""}
          <ProfessionCard />
          <VerificationCard />
          <ShareCard />
        </div>
        <div className="content">
          {isLoading ? <UserProjectList project={project} /> : <Loading />}
          {isLoading ? (
            <CommentCard user_id={project.userId} username={project.username} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
